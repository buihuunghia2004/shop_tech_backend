/**
 * @swagger
 * components:
 *   schemas:
 *     ManagerLoginReqDTO:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           example: "nguyenvana@gmail.com"
 *         password:
 *           type: string
 *           example: "Nguyenvana@123"
 *     ManagerLoginResDTO:
 *       type: object
 *       properties:
 *         accessToken:
 *           type: string
 *         refreshToken:
 *           type: string
 *         id:
 *           type: string
 *           format: uuid
 *   responses:
 *     UnauthorizedResponse:
 *       description: Unauthorized
 *     ForbiddenResponse:
 *       description: Forbidden
 *     InternalServerErrorResponse:
 *       description: Internal Server Error
 */

/**
 * @swagger
 * tags:
 *   - name: Auth-manager
 * /api/v1/auth/manager/login:
 *   post:
 *     tags:
 *       - Auth-manager
 *     summary: Manager login (use this account for test testadmin@gmail.com, Test@123)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ManagerLoginReqDTO'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ManagerLoginResDTO'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 *       500:
 *         $ref: '#/components/responses/InternalServerErrorResponse'
 */
