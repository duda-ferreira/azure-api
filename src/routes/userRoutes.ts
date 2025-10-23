import { Router } from 'express';
const router = Router();

router.get('/', (request, response) => {
    response.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]);
});

export { router as userRouter };