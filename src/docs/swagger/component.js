/**
 * @swagger
 * components:
 *   responses:
 *     UnauthorizedResponse:
 *       description: Unauthorized
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               statusCode:
 *                 type: integer
 *               message:
 *                 type: string
 *               details:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                     message:
 *                       type: string
 *     ForbiddenResponse:
 *       description: Forbidden
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               statusCode:
 *                 type: integer
 *               message:
 *                 type: string
 *               details:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                     message:
 *                       type: string
 *     InternalServerErrorResponse:
 *       description: Internal Server Error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               statusCode:
 *                 type: integer
 *               message:
 *                 type: string
 *               details:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                     message:
 *                       type: string
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         id:
 *           type: string
 *           example: "1"
 *         name:
 *           type: string
 *           example: "Laptop"
 *         price:
 *           type: number
 *           format: float
 *           example: 999.99
 *         description:
 *           type: string
 *           example: "A high-performance laptop"
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Products:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Product'
 */
