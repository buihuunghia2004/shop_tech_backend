/**
 * @swagger
 * tags:
 *   - name: Auth
 * /api/v1/auth/manager/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: manager login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:     
 *                 message:           
 *                   type: string
 *                 statusCode:
 *                   type: integer
 *                 accessToken:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *                 _id:
 *                   type: string
 *                   format: uuid
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   statusCode:
 *                     type: integer
 *                   message:
 *                     type: string
 *                   details:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         code:
 *                           type: string
 *                         message:
 *                           type: string
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   statusCode:
 *                     type: integer
 *                   message:
 *                     type: string
 *                   details:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         code:
 *                           type: string
 *                         message:
 *                           type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   statusCode:
 *                     type: integer
 *                   message:
 *                     type: string
 *                   details:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         code:
 *                           type: string
 *                         message:
 *                           type: string
 */
