module.exports = {
    "extends": "airbnb",
	"plugins": [
		"react"
	],
    "rules": {
        "func-names": 0,
        "indent": [2, 4,{ "SwitchCase": 1 }],
        "comma-dangle": [2, "never"],
        "no-multi-spaces": [2, { exceptions: { "VariableDeclarator": true } }],
        "prefer-template": 0,
        "max-len": [2, 150, 2, {
          'ignoreUrls': true,
          'ignoreComments': false
        }],
        "new-cap": [2, { "capIsNewExceptions": ["List"] }],
        "no-param-reassign": [2, { "props": false }]
    }
};
