'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
  
    let entity
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);

      if (!data || !data.description || !data.title) {
           ctx.throw(400, 'Please add some content')
      }

      if(!files || !files.image) {
          ctx.throw(400, 'Please add image')
      }

      const { user } = ctx.state
      entity = await strapi.services.posts.create({...data, ...{likes: 0, author: user}}, { files });
    } else {
        ctx.throw(400, 'Please use multipart/form-data')
    }
    return sanitizeEntity(entity, { model: strapi.models.posts });
  },

  async update(ctx) {

    const { id } = ctx.params;
    const {user} = ctx.state;

    let entity;
    if (ctx.is('multipart')) {
      ctx.throw(400, "please update only description")
    } else {

      delete ctx.request.body.likes

      entity = await strapi.services.posts.update({ id, author: user.id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.posts });
  },
  async delete(ctx) {
    const { id } = ctx.params;
    const {user} = ctx.state;

    const entity = await strapi.services.posts.delete({ id, author: user.id });
    return sanitizeEntity(entity, { model: strapi.models.posts });
  },

};