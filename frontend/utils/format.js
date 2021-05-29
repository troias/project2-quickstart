import { API_URL} from './urls'
/**
 * 
 * @param {string | number } number 
 * @returns 
 */

export const twoDecimals = (number) => {
    return parseFloat(number).toFixed(2)
}

export const formatImageUrl = (url) => `${API_URL}${url}`