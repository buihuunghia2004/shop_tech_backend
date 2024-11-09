/**
 * @swagger
 * components:
 *   schemas:
 *     ManagerCreateReqDTO:
 *       type: object
 *       required:
 *         - email
 *         - firstName
 *         - lastName
 *         - phoneNumber
 *         - dob
 *         - roles
 *       properties:
 *         email:
 *           type: string
 *           example: "nguyenvana@gmail.com"
 *         firtName:
 *           type: string
 *           example: "A"
 *         lastName:
 *           type: string
 *           example: "Nguyễn Văn"
 *         dob:
 *           type: date
 *           format: date
 *           example: "2000-01-01"
 *         phoneNumber:
 *           type: string
 *           example: "0123456789"
 *         image:
 *           type: string
 *           example: "https://example.com/image.png"
 *         roles:
 *           type: array
 *           items:
 *             type: string
 *             enum: [ROLE.MANAGER,ROLE.STAFF1,ROLE.STAFF2,ROLE.STAFF3]
 *           example: ["ROLE.MANAGER"]
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ManagerCreateResDTO:
 *       type: object
 *       required:
 *         - email
 *         - firstName
 *         - lastName
 *         - phoneNumber
 *         - dob
 *         - roles
 *       properties:
 *         email:
 *           type: string
 *           example: "nguyenvana@gmail.com"
 *         firtName:
 *           type: string
 *           example: "A"
 *         lastName:
 *           type: string
 *           example: "Nguyễn Văn"
 *         dob:
 *           type: date
 *           format: date
 *           example: "2000-01-01"
 *         phoneNumber:
 *           type: string
 *           example: "0123456789"
 *         image:
 *           type: string
 *           example: "https://example.com/image.png"
 *         roles:
 *           type: array
 *           items:
 *             type: string
 *             enum: [ROLE.MANAGER,ROLE.STAFF1,ROLE.STAFF2,ROLE.STAFF3]
 *           example: ["ROLE.MANAGER"]
 */

/**
 * @swagger
 * tags:
 *   - name: Managers
 * /api/v1/managers:
 *   post:
 *     tags:
 *       - Managers
 *     summary: Create new manager
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ManagerCreateReqDTO'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ManagerCreateResDTO'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedResponse'
 *       403:
 *         $ref: '#/components/responses/ForbiddenResponse'
 *       500:
 *         $ref: '#/components/responses/InternalServerErrorResponse'
 */
