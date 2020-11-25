module.exports = {
	extends: ['stylelint-config-standard'],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'variants',
					'responsive',
					'screen',
					'layer'
				],
			},
		],
		'at-rule-empty-line-before': 	'never',
		indentation: 'tab',
		'declaration-block-trailing-semicolon': null,
		'no-descending-specificity': null,
	},
};
