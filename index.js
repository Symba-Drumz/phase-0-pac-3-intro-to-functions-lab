// Define the shout function
function shout(string) {
    return string.toUpperCase();
  }
  
// Define the whisper function
function whisper(string) {
    return string.toLowerCase();
  }
  
  // Define the logShout function
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Define the logWhisper function
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Define the sayHiToHeadphonedRoommate function
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  module.exports = {
    shout,
    whisper,
    logShout,
    logWhisper,
    sayHiToHeadphonedRoommate
  };