require ( './root.js' );


describe('shout(string)', function() {
  it('should receive one argument and return it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO');
  });
});

describe('whisper(string)', function() {
  it('should receive one argument and return it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
  });
});

describe('logShout(string)', function() {
  it('should take a string argument and log it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  });
});

describe('logWhisper(string)', function() {
  it('should take a string argument and log it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  });
});

describe('sayHiToHeadphonedRoommate(string)', function() {
  it('should return "I can\'t hear you!" if the input is lowercase', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  });

  it('should return "YES INDEED!" if the input is uppercase', function() {
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  });

  it('should return "I would love to!" if the input is "Let\'s have dinner together!"', function() {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
});
