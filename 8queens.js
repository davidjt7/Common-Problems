export const eightQueens = (strArr) => { 
  for(const point of strArr){
    const pointX = +point.slice(1,2);
    const pointY = +point.slice(3,4);

    //top left diagonal
    let nextPointX = pointX;
    let nextPointY = pointY;
    while((nextPointX>0 && nextPointX<9) && (nextPointY>0 && nextPointY<9)){
      if(strArr.includes(`(${++nextPointX},${--nextPointY})`)){
        return `(${pointX},${pointY})`
      }
    }

    //top right diagonal
    nextPointX = pointX;
    nextPointY = pointY;
    while((nextPointX>0 && nextPointX<9) && (nextPointY>0 && nextPointY<9)){
      if(strArr.includes(`(${++nextPointX},${++nextPointY})`)){
        return `(${pointX},${pointY})`
      }
    }

    //bottom left diagonal
    nextPointX = pointX;
    nextPointY = pointY;
    while((nextPointX>0 && nextPointX<9) && (nextPointY>0 && nextPointY<9)){
      if(strArr.includes(`(${--nextPointX},${--nextPointY})`)){
        return `(${pointX},${pointY})`
      }
    }

    //bottom right diagonal
    nextPointX = pointX;
    nextPointY = pointY;
    while((nextPointX>0 && nextPointX<9) && (nextPointY>0 && nextPointY<9)){
      if(strArr.includes(`(${--nextPointX},${++nextPointY})`)){
        return `(${pointX},${pointY})`
      }
    }

    //horizontal left
    nextPointX = pointX;
    nextPointY = pointY;
    while(nextPointX>0){
      if(strArr.includes(`(${--nextPointX},${pointY})`)){
        return `(${pointX},${pointY})`
      }
    }

    //horizontal right
    nextPointX = pointX;
    nextPointY = pointY;
    while(nextPointX<9){
      if(strArr.includes(`(${++nextPointX},${pointY})`)){
        return `(${pointX},${pointY})`
      }
    }

    //vertical top
    nextPointX = pointX;
    nextPointY = pointY;
    while(nextPointY<9){
      if(strArr.includes(`(${pointX},${++nextPointY})`)){
        return `(${pointX},${pointY})`
      }
    }

    //vertical bottom
    nextPointX = pointX;
    nextPointY = pointY;
    while(nextPointY>0){
      if(strArr.includes(`(${pointX},${--nextPointY})`)){
        return `(${pointX},${pointY})`
      }
    }
  }  
  return true; 

};