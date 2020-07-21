export interface ResponseType {
  success?: boolean,
  message: string,
  metadata: object,
  details: object
}

export interface ResponseFormat extends ResponseType {
  error?: boolean,
  Stacktrace?: string
}


/**
 * @desc ERROR COMPOSER
 * @param {*} Stacktrace ERROR TRACER
 * @param {*} statusCode ERROR CODE LOG
 * @param {*} field ERROR FIELD
 * @param {*} target TARGETED ACTION
 * @param {*} message ERROR EXPLAINED
 * @param {*} details MORE ERROR DETAILS
 * @returns {object} JSON
 */
export const errorResponse = (Stacktrace: string, statusCode: number, field: string, target: string, message: string, details: object): ResponseFormat => ({
  error: true,
  Stacktrace,
  metadata: { statusCode, field, target },
  message: message || 'Error!',
  details
});

/**
 * @desc SUCCESS MESSAGE COMPOSER
 * @param {*} message SUCCESS MESSAGE
 * @param {*} statusCode STATUS CODE
 * @param {*} target TARGETED ACTION
 * @param {*} details MORE DATA
 * @returns {object} JSON
 */
export const successResponse = (message: string, statusCode: number, target: string, details: object): ResponseFormat => ({
  success: true,
  message: message || 'Success!',
  metadata: { statusCode, target},
  details
});