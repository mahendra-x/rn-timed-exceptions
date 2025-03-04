export const checkException = (hour) => {
    const currentHour = new Date().getHours();
    // const currentHour = 20;
  
    if (currentHour === hour) {
      throw new Error(`Exceptedion trigger at ${hour}:00`);
    }
  };