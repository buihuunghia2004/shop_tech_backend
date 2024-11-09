require('./component/component')

/**
 * @swagger
 * tags:
 *   - name: Categories
 */

/**
 * @swagger
 * /api/v1/categories:
 *   get:
 *     tags:
 *       - Categories
 *     summary: Get list categories
 *     security:
 *       - bearerAuth: []
 *       - apiKey: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: number
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       slug:
 *                         type: string
 *                       createdBy:
 *                         type: string
 *                       updatedBy:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 *       500:
 *         $ref: '#/components/responses/InternalServerErrorResponse'
 */

/**
 * @swagger
 * /api/v1/categories/{id}:
 *   get:
 *     tags:
 *       - Categories
 *     summary: Get category
 *     security:
 *       - bearerAuth: []
 *       - apiKey: []
 *     parameters:
 *       - in: path
 * 
 */