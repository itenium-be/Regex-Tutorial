// Input Validation
// JavaScript & Regex? --> https://itenium.be/blog/javascript/regex-in-javascript
// ATTN: There seems to be an error there: ''.test(/^$/); should be /^$/.test(''); !!

// Debug within Visual Studio:
// https://itenium.be/blog/javascript/javascript-testing-jasmine-to-jest/#vscode-integration


describe('InputValidation & Regexes :: IBAN', () => {
  const ibanRegex = /^BE\d+$/;

  describe('Iban validation', () => {
    it('recognizes an unformatted nr', () => {
      const result = ibanRegex.test('BE69978918449778')
      expect(result).toBeTruthy();
    })

    it('ignores extra whitespace', () => {
      const result = ibanRegex.test('  BE69978918449778  ')
      expect(result).toBeTruthy();
    })

    it('ignores a space between BE & the nr', () => {
      const result = ibanRegex.test('BE 69978918449778')
      expect(result).toBeTruthy();
    })

    it('ignores formatting dots', () => {
      const result = ibanRegex.test('BE69.9789.1844.9778')
      expect(result).toBeTruthy();
    })

    it('ignores formatting spaces', () => {
      const result = ibanRegex.test('BE69 9789 1844 9778')
      expect(result).toBeTruthy();
    })

    it('does not match ibans of incorrect length', () => {
      const result = ibanRegex.test('BE6997891')
      expect(result).toBeFalsy();
    })
  })

  describe('Iban formatting', () => {
    it('adds spaces', () => {
      const replaceRegex = /BE\d+/;
      const result = 'BE69978918449778'.replace(replaceRegex, '');
      expect(result).toBe('BE69 9789 1844 9778');
    })

    it('removes spaces', () => {
      const replaceRegex = /BE\d+/;
      const result = 'BE69 9789 1844 9778'.replace(replaceRegex, '');
      expect(result).toBe('BE69978918449778');
    })
  })
});




describe('InputValidation & Regexes :: INSZ', () => {
  const inszRegex = /\d+/;

  describe('Iban validation', () => {
    it('recognizes an unformatted nr', () => {
      const result = inszRegex.test('82081501156')
      expect(result).toBeTruthy();
    })

    it('ignores deimiters', () => {
      const result = inszRegex.test('82.08.15-011.56')
      expect(result).toBeTruthy();
    })
  });

  describe('INSZ formatting', () => {
    const replaceRegex = /\d+/;

    it('adds delimiters', () => {
      const insz = '82081501156';
      const result = insz.replace(replaceRegex, '');
      expect(result).toBe('82.08.15-011.56');
    })
  })

  describe('Data extraction', () => {
    const birthDateRegex = /\d+/

    it('can extract the birth date', () => {
      // TODO: is this actually achievable with `match`?
      // TODO: Might need to use replace instead?
      const result = '82081501156'.match(birthDateRegex)!;
      expect(result[0]).toBe('1982-08-15');
    })

    it.skip('can extract a birth date >= 2000', () => {
      // You probably don't want to do this with a regex (only)
    })

    it('can extract gender -- male', () => {
      const result = '05.03.02-003.92'.match(/\d+/)!;
      expect(result).toBeTruthy();
    })

    it('can extract gender -- female', () => {
      const result = '05.03.02-002.93'.match(/\d+/)!;
      expect(result).toBeTruthy();
    })

    it('can extract both genders with one regex and named groups', () => {
      const result = /(?<male>\d+)|(?<female>\d+)/.exec('05.03.02-002.93');
      console.log('result', result);
      expect(result?.groups?.female).toBeTruthy();
      expect(result?.groups?.male).toBeFalsy();
    })
  })
});




describe('InputValidation & Regexes :: Emails', () => {
  const emailRegex = /.*/;

  it('is maybe not such a good idea', () => {
    // https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression

    // You probably do not want to do this
    // A valid email is pretty worthless...
    // Users can easily provide an email that matches the regex
    // But is it really an existing email + has the user access to it?

    // I usually keep it simple (ex: has an @ with something before/after it)
    // To validate that they did not accidently put their name in the email field
    // But there is not much more you can do on the frontend (with/without regex)
  })
});


// TODO: allow user to input a date in different formats
