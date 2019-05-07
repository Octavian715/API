const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handline Get requiest  to /products'
    });
});
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handline Post requiest  to /products',
        createdProduct: product
    });
});
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {

        res.status(200).json({
            message: 'YOU DISCOVERED THE SPECIAL ID!',
            id: id
        });
    } else {
        res.status(200).join({
            messages: 'YOU PASSED AN ID'
        })
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product',
    });

});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted product',
    });
});
// router.get('/products');
module.exports = router;
