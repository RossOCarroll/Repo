let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
} 

// this code will be stuck in an infinate loop. This is because forst the conditional finds
// 0 truthy and will log 0 and on the next loop it stays 0 and so on. I will never incrment because
// it under the else part of the conditional.