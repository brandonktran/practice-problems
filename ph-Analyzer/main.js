function pHAnalyzer(pH) {
	if (ph < 0 || ph > 14) {
		return 'invalid pH value';
	} else if (ph === 7) {
		return 'neutral';
	} else if (ph >= 0 && ph < 7) {
		return 'acidic';
	} else {
		return 'alkaline';
	}
}
