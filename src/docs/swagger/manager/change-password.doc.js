/**
 * @swagger
 * components:
 *   schemas:
 *     ManagerChangePasswordReqDTO:
 *       type: object
 *       required:
 *         - oldPassword
 *         - newPassword
 *       properties:
 *         oldPassword:
 *           type: string
 *           example: "Nguyenvana@123"
 *         newPassword:
 *           type: string
 *           example: "Nguyenvana@1234"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ManagerChangePasswordResDTO:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "success"
 */

/**
 * @swagger
 * tags:
 *   - name: Auth-manager
 * /api/v1/auth/manager/me/change-password:
 *   put:
 *     tags:
 *       - Auth-manager
 *     summary: Update manager
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ManagerChangePasswordReqDTO'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ManagerChangePasswordResDTO'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 *       500:
 *         $ref: '#/components/responses/InternalServerErrorResponse'
 */
