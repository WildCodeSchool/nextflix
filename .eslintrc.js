module.exports = {
    extends: 'airbnb',
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
        "react/prop-types": [0],
        'no-plusplus': 'off'
    },
    globals: {
        "fetch": true,
        "document": true,
        "window": true
    }
};
