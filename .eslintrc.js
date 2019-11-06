module.exports = {
    extends : 'airbnb'  ,
    rules : {
        'react/jsx-filename-extension' : [1, { extensions : ['.js']}],
        'no-plusplus': 'off'
    },
    globals: {
        "fetch": true,
        "document": true,
        "window": true
    }
};
