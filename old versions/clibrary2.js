

 
function comp_style3(x,y,w,h){
  let boids = [];
  let all_boids = [];
  var b1 = new Boid();
  var b2 = new Boid();
  var b3 = new Boid();
  var b4 = new Boid();

  b1.dead = b2.dead = b3.dead = b4.dead = true;
 
  b1.set(x,y,x+w,y);
  b2.set(x+w,y,x+w,y+h);
  b3.set(x+w,y+h,x,y+h);
  b4.set(x,y+h,x,y);
 
  all_boids.push(b1);
  all_boids.push(b2);
  all_boids.push(b3);
  all_boids.push(b4);
 
  var b = new Boid(width/2 , width/2  , Math.random() * 2 * Math.PI);
  boids.push(b);
  all_boids.push(b);
 
  for(let q=0;q<5000;q++){
    for (i = 0; i < boids.length; i++) {
        var p = boids[i];
        p.update(all_boids,boids);
        if (!p.dead  && boids.length <10) {
            var child = new Boid(p.x2, p.y2,p.angle +  PI * ( random() > 0.5 ? 0.5 : -0.5)) ;
            child.parent = p;
            boids.push(child);
            all_boids.push(child);
        }
     }
  }
  
  return all_boids;
 
}


class Boid {
    constructor(x , y , angle){
 
   
    this.x1 = x ;
    this.y1 = y ;
    this.x2 = x ;
    this.y2 = y ;
    
    this.angle =  pow(random(2),20)+ angle;
   
    this.dx =  cos(this.angle);
    this.dy =  sin(this.angle);
    
    this.d = 0;
    this.dead = false;
 
    }
    
   
    
    update(all_boids,boids) {
        
      
        this.d  += 1;
        this.x2  = this.x1 + this.d  * this.dx;
        this.y2  = this.y1 + this.d  * this.dy;
 

        var deathPoint;
     
    
        for(let b of all_boids) {
             
            if (this.dead) {break;}
            if (b == this) {break;}
       
            var its = inte(this, b);
            
            // if its is true run this code
            if (its) {
                
                if (b.parent && b.parent == this){break;}
                else if (this.parent && this.parent == b) {break;}
                else if (b.collides && b.collides == this) {break;}
                else {
                    this.collides = b;
                    this.kill(boids);
  
                    deathPoint = its;
                }
                
                
            }
            
            
            
            
        } 
        
 
 
 
        
        if (this.dead) {
            this.x2 = deathPoint.x;
            this.y2 = deathPoint.y;
        }  
        
        
        
        
    } 

  
    kill(boids) {
    
        boids.cut(boids.indexOf(this) ); 
        this.dead = true;
    } 
    
    
    
    set(x1,y1,x2,y2){
       this.x1 = x1 ;
       this.y1 = y1 ;
       this.x2 = x2 ;
       this.y2 = y2 ;
      
    }
    
   
} 


 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



 


function shufArray(v1,v2){
  let lisnum = [v1];
  let bol = false;
  let num3 = 0;
   
  while(lisnum.length < v2){
    bol = false ;
      while(bol  == false){
           
        bol = false ;
        num3 = int(random(v1,v2));
       
      for(let a =0 ; a < lisnum.length ;a++){
        if(num3 == lisnum[a]){ 
           bol = false;
           break ; 
         }else {
           bol = true;
         }
      }
       if(bol  == true){
         append(lisnum,num3);
       }
    } 
 } 
  return lisnum ;
}
 
 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 











function dupElements(a){
  let arr = a;
  let truefal3=true;  
  let truefal4=true;  
  for(let ui = 0; ui<arr.length;ui++){
    for(let hi = 0 ; hi<arr.length;hi++){
   
      if(ui!=hi ){
  
        if( arr[ui].y == arr[hi].y){
          truefal3=true; 
        }else{
          truefal3=false; 
          break;
        }
    
      } 
      if( truefal3==false){
         break;
      }
    }
  }
  
  for(let ui = 0; ui<arr.length;ui++){
    for(let hi = 0 ; hi<arr.length;hi++){
   
      if(ui!=hi ){
           
        if( arr[ui].y == arr[hi].y){
          truefal4=true; 
        }else{
          truefal4=false; 
          break;
        }
    
      } 
      if( truefal4==false){
         break;
      }
    }
  }
  
  if ( truefal3 == false && truefal4 == false){
     return false ;   
  }else{
     return true ;
  }

  //return truefal3 ;
}










 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////






 
 
function randomlist(){
   let lis =[];
   for(let f = 0;f<arguments.length;f++){
   lis.push(arguments[f]);
   }
 
   return Math.random(lis);
 
}





 





 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





function rotate2D(vector, angle){
  var theta = angle * Math.PI / 180; // radians
  var matrix = [  Math.cos(theta),  Math.sin(theta), -Math.sin(theta), Math.cos(theta)];
          
  return { x: matrix[0] * vector.x + matrix[1] * vector.y, 
           y: matrix[2] * vector.x + matrix[3] * vector.y
  };
}




 
 
 




 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Array.prototype.comp_style2 =function(v1){
 
  this.limtnum = 4;
 
  for(let i=0;i<v1;i++){
    let numforobj=this.length;
    for(let j=0;j<numforobj;j++){
      let rand1= random(1,10);
      let rand2= random(1,10);
      let obj1 = {x:this[j].x,y:this[j].y,w:this[j].w,h:this[j].h} ;
      
      if(rand1 < 5 && this[j].w >this.limtnum && this[j].h >this.limtnum ){
        
        this[j] = {x:this[j].x,y:this[j].y,w:int(constrain(obj1.w/rand2,this.limtnum,obj1.w-this.limtnum)),h:this[j].h} ;
        this.push( {x:obj1.x+this[j].w,y:this[j].y,w:int(obj1.w-this[j].w),h:this[j].h}) ;
        
      }else if(rand1 > 5 && this[j].w >this.limtnum && this[j].h >this.limtnum ){
        
        this[j] = {x:this[j].x,y:this[j].y,w:this[j].w,h:int(constrain(obj1.h/rand2,this.limtnum,obj1.h-this.limtnum))} ;
        this.push( {x:obj1.x,y:this[j].y+this[j].h,w:this[j].w,h:int(obj1.h-this[j].h)}) 
 
      }
      
    }
    
  }
    
  
}

//function comp_style2(x,y,w,h,v1){
//  this.arrayObj=[];
//  this.arrayObj.push({x:x,y:y,w:w-x,h:h-y});
//  this.limtnum = 4;
  
  
//  for(let i=0;i<v1 ;i++){
//    let numforobj=this.arrayObj.length;
//    for(let j=0;j<numforobj;j++){
//      let rand1= random(1,10);
//      let rand2= random(1,10);
//      let obj1 = {x:this.arrayObj[j].x,y:this.arrayObj[j].y,w:this.arrayObj[j].w,h:this.arrayObj[j].h} ;
      
//      if(rand1 < 5 && this.arrayObj[j].w >this.limtnum && this.arrayObj[j].h >this.limtnum ){
        
//        this.arrayObj[j] = {x:this.arrayObj[j].x,y:this.arrayObj[j].y,w:int(constrain(obj1.w/rand2,this.limtnum,obj1.w-this.limtnum)),h:this.arrayObj[j].h} ;
//        this.arrayObj.push( {x:obj1.x+this.arrayObj[j].w,y:this.arrayObj[j].y,w:int(obj1.w-this.arrayObj[j].w),h:this.arrayObj[j].h}) ;
        
//      }else if(rand1 > 5 && this.arrayObj[j].w >this.limtnum && this.arrayObj[j].h >this.limtnum ){
        
//        this.arrayObj[j] = {x:this.arrayObj[j].x,y:this.arrayObj[j].y,w:this.arrayObj[j].w,h:int(constrain(obj1.h/rand2,this.limtnum,obj1.h-this.limtnum))} ;
//        this.arrayObj.push( {x:obj1.x,y:this.arrayObj[j].y+this.arrayObj[j].h,w:this.arrayObj[j].w,h:int(obj1.h-this.arrayObj[j].h)}) 
 
//      }
      
//    }
    
//  }
    
//  return this.arrayObj;
  
//}







 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




Array.prototype.comp_style1=function(ww1,hh1,ww2,hh2,dw,dh){
  

  this.dw =dw;
  this.dh =dh;
  this.x =0;
  this.y =0; 
  this.w =0;
  this.h =0;
  this.funcBol=true;
  this.s = 5 ;
  this.area = dw*dh;
  this.fillArea =0; 
 
 
  while(this.fillArea <  this.area  ){ 
 
    if(this.fillArea < int(this.area/2)){
      w1 = ww1;
      w2 = ww2;
      h1 = hh1;
      h2 = hh2; 
    }else{
      w1 = 1;
      w2 = int(ww2)/2;
      h1 = 1;
      h2 = int(hh2)/2; 
    }
 
    this.funcBol = true;
 
    if ( this.length > 0){
    
           while(this.funcBol){
 
               this.x =  int(random( this.dw/this.s))*this.s;
               this.y =  int(random( this.dh/this.s))*this.s;
               this.w =  int(random(w1,w2) )*this.s;
               this.h =  int(random(h1,h2) )*this.s; 
        
                 while( this.x+ this.w > this.dw  ){
                    this.x =  int(random(this.dw/this.s))*this.s;
                    this.w =  int(random(w1,w2) )*this.s;
                 } 
             
             
       
                 while(  this.y+ this.h > this.dh ){
                    this.y =  int(random( this.dh/this.s))*this.s;
                    this.h =  int(random(h1,h2))*this.s;
                 } 
             
               
               
          
             for( let j  of this  ){
                if( this.x+this.w >  j.x   &&   this.x <  j.x + j.w  && this.y+this.h  >  j.y   &&   this.y <  j.y + j.h   ){
                  this.funcBol = true ;
                  break ;
                }else{
                  this.funcBol = false ;
                }
             }
           
        } 

   
  }else{
       this.x = int(random( this.dw/this.s ))*this.s;
       this.y = int(random( this.dh/this.s ))*this.s;
       this.w = int(random(w1,w2) )*this.s  ;
       this.h = int(random(h1,h2) )*this.s;
 
       
        
         while( this.x+ this.w >  this.dw  ){
            this.x = int(random( this.dw/this.s ))*this.s;
            this.w = int(random(w1,w2) )*this.s ;
         
         } 
  
      
 
         while(  this.y+ this.h > this.dh  ){
            this.y = int(random( this.dh/this.s ))*this.s;
            this.h = int(random(h1,h2) )*this.s;
         } 
     
       
  }
  
 
  
  this.push({x:this.x,y:this.y,w:this.w,h:this.h}); 
  this.fillArea += this.w*this.h;
 
}
  
  
 
   
  //this.obj2 =[];
 
 
  //for(let b=0;b<this.obj.length ;b++){
  // this.obj2.push({x:this.obj[b].x ,y:this.obj[b].y,w: this.obj[b].w,h: this.obj[b].h});
  //}
  //for(let b=0;b<this.obj.length ;b++){
  // this.obj2.push({x:this.obj[b].x+dm,y:this.obj[b].y,w: this.obj[b].w,h: this.obj[b].h});
  //}
  //for(let b=0;b<this.obj.length ;b++){
  // this.obj2.push({x:this.obj[b].x,y:this.obj[b].y+dm,w:this.obj[b].w,h: this.obj[b].h});
  //}
  //for(let b=0;b<this.obj.length ;b++){
  // this.obj2.push({x:this.obj[b].x+dm,y:this.obj[b].y+dm,w:this.obj[b].w,h: this.obj[b].h});
  //}
 
  
}



 

//function comp_style1(ww1,hh1,ww2,hh2,dw,dh){
  

//  this.dw =dw;
//  this.dh =dh;
//  this.x =0;
//  this.y =0; 
//  this.w =0;
//  this.h =0;
//  this.funcBol=true;
//  this.s = 5 ;
//  this.area = dw*dh;
//  this.fillArea =0; 
//  this.funcArrayObj=[];
 
//  while(this.fillArea <  this.area  ){ 
 
//    if(this.fillArea < int(this.area/2)){
//      w1 = ww1;
//      w2 = ww2;
//      h1 = hh1;
//      h2 = hh2; 
//    }else{
//      w1 = 1;
//      w2 = int(ww2)/2;
//      h1 = 1;
//      h2 = int(hh2)/2; 
//    }
 
//    this.funcBol = true;
 
//    if ( this.funcArrayObj.length > 0){
    
//           while(this.funcBol){
 
//               this.x =  int(random( this.dw/this.s))*this.s;
//               this.y =  int(random( this.dh/this.s))*this.s;
//               this.w =  int(random(w1,w2) )*this.s;
//               this.h =  int(random(h1,h2) )*this.s; 
        
//                 while( this.x+ this.w > this.dw  ){
//                    this.x =  int(random(this.dw/this.s))*this.s;
//                    this.w =  int(random(w1,w2) )*this.s;
//                 } 
             
             
       
//                 while(  this.y+ this.h > this.dh ){
//                    this.y =  int(random( this.dh/this.s))*this.s;
//                    this.h =  int(random(h1,h2))*this.s;
//                 } 
             
               
               
          
//             for( let j  of this.funcArrayObj ){
//                if( this.x+this.w >  j.x   &&   this.x <  j.x + j.w  && this.y+this.h  >  j.y   &&   this.y <  j.y + j.h   ){
//                  this.funcBol = true ;
//                  break ;
//                }else{
//                  this.funcBol = false ;
//                }
//             }
           
//        } 

   
//  }else{
//       this.x = int(random( this.dw/this.s ))*this.s;
//       this.y = int(random( this.dh/this.s ))*this.s;
//       this.w = int(random(w1,w2) )*this.s  ;
//       this.h = int(random(h1,h2) )*this.s;
 
       
        
//         while( this.x+ this.w >  this.dw  ){
//            this.x = int(random( this.dw/this.s ))*this.s;
//            this.w = int(random(w1,w2) )*this.s ;
         
//         } 
  
      
 
//         while(  this.y+ this.h > this.dh  ){
//            this.y = int(random( this.dh/this.s ))*this.s;
//            this.h = int(random(h1,h2) )*this.s;
//         } 
     
       
//  }
  
 
  
//  this.funcArrayObj.push({x:x,y:y,w:w,h:h}); 
//  this.fillArea += w*h;
 
//}
  
  
 
   
//  //this.obj2 =[];
 
 
//  //for(let b=0;b<this.obj.length ;b++){
//  // this.obj2.push({x:this.obj[b].x ,y:this.obj[b].y,w: this.obj[b].w,h: this.obj[b].h});
//  //}
//  //for(let b=0;b<this.obj.length ;b++){
//  // this.obj2.push({x:this.obj[b].x+dm,y:this.obj[b].y,w: this.obj[b].w,h: this.obj[b].h});
//  //}
//  //for(let b=0;b<this.obj.length ;b++){
//  // this.obj2.push({x:this.obj[b].x,y:this.obj[b].y+dm,w:this.obj[b].w,h: this.obj[b].h});
//  //}
//  //for(let b=0;b<this.obj.length ;b++){
//  // this.obj2.push({x:this.obj[b].x+dm,y:this.obj[b].y+dm,w:this.obj[b].w,h: this.obj[b].h});
//  //}
  
//  return this.funcArrayObj;
  
//}







 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////











function attachShape(obj){
  let num1=0;
  for(let g=0;g<obj.length;g++){
    let shape2 ;
    let n1 , n2 , n3 ;
    let bol = false;
    for(let s=0;s<obj[g].length-1;s++){
      
      for(let b=0;b<obj.length;b++){
        for(let n=0;n<obj[b].length-1;n++){
          let l1 = new vec2(obj[g][s].x,obj[g][s].y,obj[g][s+1].x,obj[g][s+1].y);
          let l2 = new vec2(obj[b][n].x,obj[b][n].y,obj[b][n+1].x,obj[b][n+1].y);
            
             
            if(g!=b && l1.x1 == l2.x1 && l1.y1 == l2.y1 && l1.x2 == l2.x2 && l1.y2 == l2.y2 ){
              bol = true;
              n1 = s;
              n2 = b;
              n3 = n;
              shape2=obj[b];
              break;
            }

            if(g!=b && l1.x1 == l2.x2 && l1.y1 == l2.y2 && l1.x2 == l2.x1 && l1.y2 == l2.y1 ){
              bol = true;
              n1 = s;
              n2 = b;
              n3 = n;
              shape2=obj[b];
              break;
              
            }
           
          
        }
        if(bol==true){
          break; 
        }
      }
      if(bol==true){
         break; 
      }
      
    }
    
    
 
    
    
    if(bol == true){
      
    
      let arr1= obj[g].slice(0,n1); 
   
      let arr2= obj[g].slice(n1+1,obj[g].length+0);
    
 
      arr1 = concat(arr1,shape2.slice(n3+1    ,shape2.length-1 ));
      arr1 = concat(arr1,shape2.slice(0 ,n3   ));
 
      arr1 = concat(arr1,arr2);
      obj = cutarr(obj,n2 );
 
      
   
      obj[g] = arr1;
  
   
      
      g--;    
      num1++;
      
      
      
      
    }
    

 
    
    
  } 
 
  
  
  //  for(let g=0;g<obj.length;g++){
      
  //    let n4 =[];
  //    let bol1=false;
  //    for(let f=0;f<obj[g].length-1;f++){
  //      for(let v=0;v<obj[g].length-1;v++){
  //        if(f!=v && obj[g][f].x == obj[g][v+1].x&& obj[g][f].y == obj[g][v+1].y&& obj[g][f+1].x == obj[g][v].x && obj[g][f+1].y == obj[g][v].y){
  //          n4.push(f+1);
  //        }
  //        else if(f!=v && obj[g][f].x == obj[g][v].x&& obj[g][f].y == obj[g][v].y&& obj[g][f+1].x == obj[g][v+1].x && obj[g][f+1].y == obj[g][v+1].y){
  //          n4.push(v+1);
  //        }
  //      }
  //    }
  //    console.log(n4);
  //    if(n4.length>0){
 
  //    obj[g] = cutarr(obj[g],n4[0],n4[n4.length-1] );
     
  //    }
  //  }
  
  
 
  
  
    for(let c=0;c<obj.length;c++){ 
      if(obj[c][obj[c].length-1]!=obj[c][0]){
        obj[c].push(obj[c][0]);
      }
    }
  
  
  
    
 
      obj = clearVert(obj);

 
  

  
  
  
  return obj;
  
  
 
  
} 






 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 
function cutshape(xx1,yy1,xx2,yy2,arr){  
  
 
 
   let x1 = xx1;
   let y1 = yy1;
   let x2 = xx2;
   let y2 = yy2;
   this.arrayObj=arr;
   let cpa =[]; // cute point array 
   let num7 =0;
   
   for(let j=0;j<this.arrayObj.length;j++){ // this loop for check all shape if cuting line 
   
             for(let i=0;i<this.arrayObj[j].length-1;i++){ 
                let m1 = Parangle(x1,y1,x2,y2, 0 );
               
                let m2 = Parangle(this.arrayObj[j][i].x,this.arrayObj[j][i].y,this.arrayObj[j][i+1].x,this.arrayObj[j][i+1].y,-1  );
                
                let a1 = angle(x1,y1,x2,y2);
                let a2 = angle(this.arrayObj[j][i].x,this.arrayObj[j][i].y,this.arrayObj[j][i+1].x,this.arrayObj[j][i+1].y);
                 
                if( !( a1==a2 || a1==a2-180 || a1==a2+180 ) ){
              
                  if(inte(m1,m2)){
                     cpa.push({ cs: i , p: inte(m1,m2) });  
                  } 
                  
                }
              
    
             }
             
             
     
 
            if(cpa.length==1){
                let tf1=false;
                let tf2=false;
                let tf3=false;
                let tf4=false;
                let m3 =Parangle(x2,y2,0,y2,-2) ;
                let m4 =Parangle(x2,y2,dm,y2,-2) ;
                let m5 =Parangle(x2,y2,x2,0,-2) ;
                let m6 =Parangle(x2,y2,x2,dm,-2) ;
                
                for(let i=0;i<this.arrayObj[j].length-1;i++){
                   let m7=Parangle(this.arrayObj[j][i].x,this.arrayObj[j][i].y,this.arrayObj[j][i+1].x,this.arrayObj[j][i+1].y,2) ;
                   if(inte (m3,m7)){
                     tf1 = true;
                   }
                   if(inte (m4,m7)){
                     tf2 = true;
                   }
                   if(inte (m5,m7)){
                     tf3 = true;
                   }
                   if(inte (m6,m7)){
                     tf4 = true;
                   }
                   if(tf1==true&&tf2==true&&tf3==true&tf4==true){
                     break;
                   }
                }
                
                if(tf1==true && tf2==true && tf3==true && tf4==true){
                  this.arrayObj[j].splice(cpa[0].cs+1 ,0,cpa[0].p,{x:x2,y:y2},{x:x2,y:y2},cpa[0].p );
             
                }else{
                  this.arrayObj[j].splice(cpa[0].cs+1 ,0,cpa[0].p,{x:x1,y:y1},{x:x1,y:y1},cpa[0].p );
                  
                }
          
                cpa =[];
                num7 ++;
                
              
         
            }else if(cpa.length>1){ 

                  
               n2 = 0;
               for(let mn=0;mn< cpa.length-1  ;mn+=1){
                  
                   let shp = this.arrayObj[j];
                
                   let shp2= shp.slice( cpa[mn ].cs+1 ,cpa[mn+1 ].cs+1);
                   shp2.unshift(cpa[mn ].p);
                   shp2.push(cpa[mn+1 ].p);
                   this.arrayObj.splice(j+1 ,0,shp2);
                   
                     
                   if(this.arrayObj[j+1][0] != this.arrayObj[j+1][this.arrayObj[j+1].length-1]){
                     this.arrayObj[j+1].push(this.arrayObj[j+1][0]);
                   }
           
                
                 n2++;
                
               } 
              
               j+=n2;
               cpa =[];  
               num7 ++;
           
           
           
          } 
            
            
   
   while(this.arrayObj[j][this.arrayObj[j].length-2].x==this.arrayObj[j][this.arrayObj[j].length-1].x&&this.arrayObj[j][this.arrayObj[j].length-2].y==this.arrayObj[j][this.arrayObj[j].length-1].y){
     this.arrayObj[j]=cutarr(this.arrayObj[j],this.arrayObj[j].length-1); 
   }
 
   
  }

  return this.arrayObj;
}                  




//function cutshape(xx1,yy1,xx2,yy2,arr){  
  
 
 
//   let x1 = xx1;
//   let y1 = yy1;
//   let x2 = xx2;
//   let y2 = yy2;
//   this.arrayObj=arr;
//   let cpa =[]; // cute point array
//   let num7 =0;
   
//   for(let j=0;j<this.arrayObj.length;j++){ // this loop for check all shape if cuting line 
   
             
//             for(let i=0;i<this.arrayObj[j].length-1;i++){ 
//                let m1 = Parangle(x1,y1,x2,y2, 0 );
               
//                let m2 = Parangle(this.arrayObj[j][i].x,this.arrayObj[j][i].y,this.arrayObj[j][i+1].x,this.arrayObj[j][i+1].y,-1  );
                
//                let a1 = angle(x1,y1,x2,y2);
//                let a2 = angle(this.arrayObj[j][i].x,this.arrayObj[j][i].y,this.arrayObj[j][i+1].x,this.arrayObj[j][i+1].y);
//                let a3 =  int(angle(lerp(x1,x2,0.5),lerp(y1,y2,0.5),lerp(this.arrayObj[j][i].x,this.arrayObj[j][i+1].x,0.5),lerp(this.arrayObj[j][i].y,this.arrayObj[j][i+1].y,0.5)));
                
//                if( !( a1==a2 || a1==a2-180 || a1==a2+180 ) ){
              
//                  if(inte(m1,m2)){
//                     cpa.push({ cs: i , p: inte(m1,m2) });  
//                  } 
                  
//                }
              
    
//             }
             
             
     
 
//            if(cpa.length==1){
//                //console.log(1);
//                let tf1=false;
//                let tf2=false;
//                let tf3=false;
//                let tf4=false;
//                let m3 =Parangle(x2,y2,0,y2,-2) ;
//                let m4 =Parangle(x2,y2,dm,y2,-2) ;
//                let m5 =Parangle(x2,y2,x2,0,-2) ;
//                let m6 =Parangle(x2,y2,x2,dm,-2) ;
                
//                for(let i=0;i<this.arrayObj[j].length-1;i++){
//                   let m7=Parangle(this.arrayObj[j][i].x,this.arrayObj[j][i].y,this.arrayObj[j][i+1].x,this.arrayObj[j][i+1].y,2) ;
//                   if(inte (m3,m7)){
//                     tf1 = true;
//                   }
//                   if(inte (m4,m7)){
//                     tf2 = true;
//                   }
//                   if(inte (m5,m7)){
//                     tf3 = true;
//                   }
//                   if(inte (m6,m7)){
//                     tf4 = true;
//                   }
//                   if(tf1==true&&tf2==true&&tf3==true&tf4==true){
//                     break;
//                   }
//                }
                
//                if(tf1==true && tf2==true && tf3==true && tf4==true){
//                  this.arrayObj[j].splice(cpa[0].cs+1 ,0,cpa[0].p,{x:x2,y:y2},{x:x2,y:y2},cpa[0].p );
             
//                }else{
//                  this.arrayObj[j].splice(cpa[0].cs+1 ,0,cpa[0].p,{x:x1,y:y1},{x:x1,y:y1},cpa[0].p );
                  
//                }
          
//                cpa =[];
//                num7 ++;
                
              
         
//            }else if(cpa.length>1){ 

                   
//               n2 = 0;
//               for(let mn=0;mn< cpa.length-1  ;mn+=1){
                  
//                   shp = this.arrayObj[j];
//                   //shp1= shp.slice(0,cpa[mn ].cs +1 );
//                   //shp1.push(cpa[mn ].p);
//                   //shp1.push(cpa[mn+1 ].p);
//                   //shp1  = concat(shp1,shp.slice(cpa[mn+1].cs+1,this.arrayObj[j].length));
//                   //this.arrayObj[j] =  shp1;
                    
//                   shp2= shp.slice( cpa[mn ].cs+1 ,cpa[mn+1 ].cs+1);
//                   shp2.unshift(cpa[mn ].p);
//                   shp2.push(cpa[mn+1 ].p);
//                   this.arrayObj.splice(j+1 ,0,shp2);
                   
                     
//                   if(this.arrayObj[j+1][0] != this.arrayObj[j+1][this.arrayObj[j+1].length-1]){
//                     this.arrayObj[j+1].push(this.arrayObj[j+1][0]);
//                   }
                 
                   
                   
     
                  
                                
                
//                 n2++;
                
//               } 
              
//               j+=n2;
//               cpa =[];  
//               num7 ++;
           
           
           
//          } 
            
            
   
//   while(this.arrayObj[j][this.arrayObj[j].length-2].x==this.arrayObj[j][this.arrayObj[j].length-1].x&&this.arrayObj[j][this.arrayObj[j].length-2].y==this.arrayObj[j][this.arrayObj[j].length-1].y){
//     this.arrayObj[j]=cutarr(this.arrayObj[j],this.arrayObj[j].length-1); 
//   }
 
   
//  }

//  return this.arrayObj;
//}                  










                //&&    ( (x1<obj[j][i].x && x1<obj[j][i+1].x && x2<obj[j][i].x && x2<obj[j][i+1].x ) || ( x1>obj[j][i].x && x1>obj[j][i+1].x && x2>obj[j][i].x && x2>obj[j][i+1].x ) )   !( a1==a3 || a1==a3-180 || a1==a3+180 ) && 
                //else if(  ( a1==a3 || a1==a3-180 || a1==a3+180 )  ){
                //  console.log(a1,a3,inte(m1,m2)); 
                //  if(inte(m1,m2)){
                //     cpa.push({ cs: i , p: inte(m1,m2) });
                      
                //  } 
                //}







//function cutshape1(xx1,yy1,xx2,yy2,obj){ 
  
 
 
//   let x1 = xx1;
//   let y1 = yy1;
//   let x2 = xx2;
//   let y2 = yy2;
  
//   let cpa =[]; // cute point array
//   let num7 =0;
   
//   for(let j=0;j<obj.length;j++){ // this loop for check all shape if cuting line 
   
            
//             for(let i=0;i<obj[j].length-1;i++){ 
//                let m1 = Parangle(x1,y1,x2,y2,0 );
//                let m2 = Parangle(obj[j][i].x,obj[j][i].y,obj[j][i+1].x,obj[j][i+1].y,0 );
//                let a1 = angle(x1,y1,x2,y2);
//                let a2 = angle(obj[j][i].x,obj[j][i].y,obj[j][i+1].x,obj[j][i+1].y);
//                let a3 = int(angle(lerp(x1,x2,0.5),lerp(y1,y2,0.5),lerp(obj[j][i].x,obj[j][i+1].x,0.5),lerp(obj[j][i].y,obj[j][i+1].y,0.5)));
                   
//                if(inte(m1,m2) ){
               
//                    if( a1 == a2 || a1 == a2-180 || a1 == a2+180 ){
                      
//                      if( (   ( a1 == a3 || a1 == a3-180 || a1 == a3+180  )  && ( ( x1 < obj[j][i].x && x1 < obj[j][i+1].x && x2 < obj[j][i].x && x2 < obj[j][i+1].x ) || ( x1 > obj[j][i].x && x1 > obj[j][i+1].x && x2 > obj[j][i].x && x2 > obj[j][i+1].x ) ) ) ){
                      
//                        //cpa.push({ cs: i , p: inte(m1,m2) });
                      
//                      }
//                    }else{
//                      cpa.push({ cs: i , p: inte(m1,m2) });
//                    }
                  
//                }
    
//             }
             
             
     
 
//            if(cpa.length==1){
//                //console.log(1);
//                let tf1=false;
//                let tf2=false;
//                let tf3=false;
//                let tf4=false;
//                let m3 =Parangle(x2,y2,0,y2,-2) ;
//                let m4 =Parangle(x2,y2,dm,y2,-2) ;
//                let m5 =Parangle(x2,y2,x2,0,-2) ;
//                let m6 =Parangle(x2,y2,x2,dm,-2) ;
                
//                for(let i=0;i<obj[j].length-1;i++){
//                   let m7=Parangle(obj[j][i].x,obj[j][i].y,obj[j][i+1].x,obj[j][i+1].y,2) ;
//                   if(inte (m3,m7)){
//                     tf1 = true;
//                   }
//                   if(inte (m4,m7)){
//                     tf2 = true;
//                   }
//                   if(inte (m5,m7)){
//                     tf3 = true;
//                   }
//                   if(inte (m6,m7)){
//                     tf4 = true;
//                   }
//                   if(tf1==true&&tf2==true&&tf3==true&tf4==true){
//                     break;
//                   }
//                }
                
//                if(tf1==true && tf2==true && tf3==true && tf4==true){
//                  obj[j].splice(cpa[0].cs+1 ,0,cpa[0].p,{x:x2,y:y2},{x:x2,y:y2},cpa[0].p);
             
//                }else{
//                  obj[j].splice(cpa[0].cs+1 ,0,cpa[0].p,{x:x1,y:y1},{x:x1,y:y1},cpa[0].p);
                  
//                }
          
//                cpa =[];
//                num7 ++;
                
              
         
//            }else if(cpa.length>1){ 
//               //console.log(2);
                   
//               n2 = 0;
//               for(let mn=0;mn< cpa.length-1  ;mn+=1){
                  
//                   shp = obj[j];
//                   shp1= shp.slice(0,cpa[mn ].cs +1 );
//                   shp1.push(cpa[mn ].p);
//                   shp1.push(cpa[mn+1 ].p);
//                   shp1  = concat(shp1,shp.slice(cpa[mn+1].cs+1,obj[j].length));
//                   obj[j] =  shp1;
                    
//                   shp2= shp.slice( cpa[mn ].cs+1 ,cpa[mn+1 ].cs+1);
//                   shp2.unshift(cpa[mn ].p);
//                   shp2.push(cpa[mn+1 ].p);
//                   obj.splice(j+1 ,0,shp2);
                   
                     
//                   if(obj[j+1][0] != obj[j+1][obj[j+1].length-1]){
//                     obj[j+1].push(obj[j+1][0]);
//                   }
//                   if(obj[j][0] != obj[j][obj[j].length-1]){
//                     obj[j].push(obj[j][0]);
//                   }
                   
                   
     
                  
                                
                
//                 n2++;
                
//               } 
              
//               j+=n2;
//               cpa =[];  
//               num7 ++;
           
           
           
//          } 
            
            
 
    
 
   
//  }
 
 
//  return obj;
//}                  




 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 
function inte(boid1, boid2) {

    var x1 = boid1.x1, x2 = boid1.x2, x3 = boid2.x1, x4 = boid2.x2;
    var y1 = boid1.y1, y2 = boid1.y2, y3 = boid2.y1, y4 = boid2.y2;

    var dem = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (dem == 0 ) {
    return;
    }  
    var ua_num = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    var ub_num = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);

    var ua = ua_num / dem;
    var ub = ub_num / dem;

     
    if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) { 
        var x =  (x1 + ua * (x2 - x1));
        var y =  (y1 + ua * (y2 - y1));
        var v = {x:  limitFloat(x,0),y:  limitFloat(y,0) } ;
        //v.ua = ua;
        //v.ub = ub;

        return v;
    }

}


// function inte(b1, b2) {
//     //p1, p2, p3, p4
//    var c2x = b2.x1 - b2.x2; 
//    var c3x = b1.x1 - b1.x2;  
//    var c2y = b2.y1 - b2.y2;  
//    var c3y = b1.y1 - b1.y2;  
  
  
//    var d  = c3x * c2y - c3y * c2x;
//    console.log(d);
//    if (d == 0) {
//      throw new Error('Number of intersection points is zero or infinity.');
//    }
  
   
//    var u1 = b1.x1 * b1.y2 - b1.y1 * b1.x2;  
//    var u4 = b2.x1 * b2.y2 - b2.y1 * b2.x2;  
  
   
    
//    var px = (u1 * c2x - c3x * u4) / d;
//    var py = (u1 * c2y - c3y * u4) / d;
    
//    var p = { x: px, y: py };
  
//    return p;
//}

 



// function inte(b1,b2) {
//    let p1 ={x:b1.x1,y:b1.y1};  
//    let p2 ={x:b1.x2,y:b1.y2}; 
//    let p3 ={x:b2.x1,y:b2.y1}; 
//    let p4 ={x:b2.x2,y:b2.y2}; 
//    var c2x = p3.x - p4.x; 
//    var c3x = p1.x - p2.x;  
//    var c2y = p3.y - p4.y;  
//    var c3y = p1.y - p2.y;  
  
  
//    var d  = c3x * c2y - c3y * c2x;
  
//    if (d == 0) {
//      throw new Error('Number of intersection points is zero or infinity.');
//    }
  
   
//    var u1 = p1.x * p2.y - p1.y * p2.x;  
//    var u4 = p3.x * p4.y - p3.y * p4.x;  
  
   
    
//    var px = (u1 * c2x - c3x * u4) / d;
//    var py = (u1 * c2y - c3y * u4) / d;
    
//    var p = { x: px, y: py };
  
//    return p;
//}




 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 




function digitCounter(n1){

  this.n1=int(n1);
  console.log(this.n1);
  this.n2=0;
  while(int(abs(this.n1))!=0){
    this.n1/=10;
    this.n2++;
  }
  return this.n2;
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function angle(xx1,yy1,xx2,yy2){
  
  
   let var1 =  dist(xx2,yy2,xx1,yy1) ;
   let var2 =  dist(xx1,yy1,xx2,yy1) ;
   
   let var3  ;
 
   if(yy2 <=yy1 && xx1 <=xx2){
      var3 = 90 - degrees(pow((var2 ) /(var1),2)*PI/2);

   }else if(yy2 <=yy1 && xx2 <=xx1){
      var3 = 90 + degrees(pow((var2 ) /(var1),2)*PI/2);
      
   }else if(yy1 <=yy2 && xx2 <=xx1){ 
      var3 = 270 - degrees(pow((var2) /(var1),2)*PI/2);

   }else if(yy1 < yy2 && xx1 < xx2){
      var3 = 270 + degrees(pow((var2) /(var1),2)*PI/2);
  
     
   }
    
    
   return var3;
 
}






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





function Parangle(x1,y1,x2,y2,n1){
   let n2 = -n1/distance(x1,y1,x2,y2)*1.4143;
   return { x1 :  limitFloat(lerp( x1, x2,n2),0) , y1 :  limitFloat(lerp( y1, y2, n2),0) , x2  :  limitFloat(lerp( x1, x2,1-n2),0) ,y2 :  limitFloat(lerp( y1, y2, 1-n2),0) } ;
}





 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





function limitFloat(n,p){
  return Math.floor(n*Math.pow(10,p))/Math.pow(10,p) ;
}




 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Object.defineProperty(Array.prototype, 'cut', {
//    value: function(){ 
//    let s , e;
//    if(arguments[1]){
//      s = arguments[0];
//      e = arguments[1];
//    }else{
//      s = arguments[0];
//      e = arguments[0];
//    }
 
//    return this.slice(0,s).concat(this.slice(e+1,this.length));
 
//  }
//});

Array.prototype.cut=function(){

  let s , e;
  if(arguments[1]){
    s = arguments[0];
    e = arguments[1];
  }else{
    s = arguments[0];
    e = arguments[0];
  }
  this.replace(this.slice(0,s).concat(this.slice(e+1,this.length)));
  
}



//this.valueOf(this.slice(0,s).concat(this.slice(e+1,this.length))) ;   this.slice(0,s).concat(this.slice(e+1,this.length))
//function cutarr(){
 
//  let farr =[];
//  let s , e;
//  if(arguments[2]){
//    s = arguments[1];
//    e = arguments[2];
//  }else{
//    s = arguments[1];
//    e = arguments[1];
//  }
   
//  farr = farr.concat( arguments[0].slice(0,s));
//  farr = farr.concat( arguments[0].slice(e+1 , arguments[0].length ));
 
//  return  farr ;
  
//}








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





Array.prototype.clear=function(){
  while(this.length>0){this.pop();}
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




Array.prototype.replace=function(a){
  while(this.length>0){this.pop();}
  for(let i of a){this.push(i);}
}


 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function vec(){
  
  if(arguments.length==2){
    this.x=arguments[0];
    this.y=arguments[1];
  }else if(arguments.length==3){
    this.x=arguments[0];
    this.y=arguments[1];
    this.z=arguments[2]; 
  }
  
 
}


 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function vec2(){
  
  if(arguments.length==4){
    this.x1=arguments[0];
    this.y1=arguments[1];
    this.x2=arguments[2];
    this.y2=arguments[3];
  }else if(arguments.length==6){
    this.x1=arguments[0];
    this.y1=arguments[1];
    this.z1=arguments[2];
    this.x2=arguments[3];
    this.y2=arguments[4];
    this.z2=arguments[5]; 
  }
  
 
}
 



 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





function clearVert(obj){
    
  let sampleObj = [];
  for(let c=0;c<obj.length;c++){ 
      let startVert = obj[c][0];
      let endVert   = obj[c][1];
            
      for(let a=0;a<obj[c].length-2;a++){
           
          
          let a1 = int(angle(obj[c][a].x,obj[c][a].y,obj[c][a+1].x,obj[c][a+1].y)) ;
          let a2 = int(angle(obj[c][a].x,obj[c][a].y,obj[c][a+2].x,obj[c][a+2].y)) ;
          if( a1 == a2 || a1 == a2-180 || a1 == a2+180   ){
             endVert = obj[c][a+2];            
          }else if ( !(a1 == a2 || a1 == a2-180 || a1 == a2+180) ){
             if(endVert!=null){
             sampleObj.push(endVert);
             }
             startVert = obj[c][a+1];
             endVert = obj[c][a+2];
             
          }
          if(a==obj[c].length-3){
 
             sampleObj.push(obj[c][obj[c].length-1]);
             
          }else if(a==0){
            sampleObj.push(obj[c][0]);
          }
        
      }
     
      
   obj[c] = sampleObj;
  }
 
  return obj;
  
}





 
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//function Parangle(xx1,yy1,xx2,yy2,n2){
   
//   let var1 = dist(xx2,yy2,xx1,yy1);
//   let var2 = dist(xx1,yy1,xx2,yy1);
//   let var3 ,var4 ;
 
//   if(yy2 <yy1 && xx2 <xx1){
//       var3 =  90 - degrees(  (var2/var1)*(var2/var1)*PI/2 ) ;
//       var4 = radians( -var3+90 );

//   }else if( yy2 <=yy1 && xx1 <=xx2){
//       var3 = 90 + degrees( (var2/var1)*(var2/var1)*PI/2 ) ;
//       var4 = radians( -var3+90 );

//   }else if( yy1 <=yy2 && xx1 <=xx2){
//       var3 =  270 - degrees( (var2/var1)*(var2/var1)*PI/2 ) ;
//       var4 = radians( -var3+90 );

//   }else if(yy1 <=yy2 && xx2 <=xx1 ){
//       var3 =  270 + degrees( (var2/var1)*(var2/var1)*PI/2 ) ;
//       var4 = radians( -var3+90 );

//   }
  
   
//   return { x1 :  sin( var4 )*n2  + xx1 , y1 :  cos( var4 )*n2  + yy1 , x2  : sin( var4 )*n2*-1+xx2 , y2 : cos( var4 )*n2*-1  + yy2 } ;
   
 
//}








//function distance(x1,y1,x2,y2){
//  let dx = x2 - x1;
//  let dy = y2 - y1;
//  let dist = Math.sqrt(dx*dx + dy*dy);
//  return dist ; 
  
//  var v1 = {x: 4, y: -9};
//  var v2 = {x: 5, y: 15};

//  var distance = Math.sqrt( Math.pow((v2.x — v1.x), 2) + Math.pow((v2.y — v1.y), 2) );
//}




 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 
 
  
 function removeDupElements(a){
  let arr = a;
  for(let ui = 0; ui<arr.length;ui++){
    for(let hi = 0; hi<arr.length;hi++){
      if(ui!=hi && arr[ui] == arr[hi]  ){
        arr =  cutarr(arr,hi);
        
      }
    
    } 
    
  }
  
 return arr ;   
  
}
 






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
 
  
 
function distance(x1,y1,x2,y2){
    let y = x2 - x1;
    let x = y2 - y1;
    return Math.sqrt(x * x + y * y);
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function cshape(x,y,w,h,r){
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  this.num1=0.1;
  this.num2=0;
  this.num3=0;
  this.num4=0;
  this.num5=0;
  push();
  translate( this.w/2,this.h/2);
  
  
  
  this.r = constrain(r , 0 , 10)/10;
  if ( this.w  < this.h){
     this.num4 = this.w ;
  }else {
     this.num4 = this.h;
  }
  this.num5 = ((this.num4 /2)/10)*this.r;
 
  
  for(let i=0;i< HALF_PI ; i+=this.num1){
     this.num2 += sin(i)*this.num5 ;
     this.num3 += cos(i)*this.num5 ;
  }
  
  
  beginShape();
  for(let i=0;i< HALF_PI ; i+=this.num1){
     this.y += sin(i)*this.num5 ;
     this.x += cos(i)*this.num5 ;
    vertex(this.x+(this.w/2)-this.num2*1.07  ,this.y-(this.h/2) );
    
  }
  for(let i=HALF_PI;i< HALF_PI*2 ; i+=this.num1){
     this.y += sin(i)*this.num5 ;
     this.x += cos(i)*this.num5 ;
    vertex(this.x+(this.w/2)-this.num2*1.07 ,this.y+(this.h/2)-this.num3*1.93 );
    
  }
  for(let i=HALF_PI*2;i< HALF_PI*3 ; i+=this.num1){
     this.y += sin(i)*this.num5;
     this.x += cos(i)*this.num5 ;
    vertex(this.x-(this.w/2)+this.num2 ,this.y+(this.h/2)-this.num3*1.93 );
    
  }
  for(let i=HALF_PI*3;i< HALF_PI*4 ; i+=this.num1){
     this.y += sin(i)*this.num5 ;
     this.x += cos(i)*this.num5 ;
    vertex(this.x-(this.w/2)+this.num2 ,this.y-(this.h/2) );
    
  }
  
  
 endShape(CLOSE);
 pop();
} 






 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





function cpolygon(x,y,radius,np){
  let angle = TWO_PI / np ;
  beginShape();
  for(let a = 0 ; a < TWO_PI ; a += angle){
    let sx = x + cos(a) * radius ;
    let sy = y + sin(a) * radius ;
    vertex(sx,sy);
 
  }
  endShape(CLOSE);
 
}




 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





function cstar(x,y,radius1,radius2,np){
  let angle = TWO_PI / np ;
  let halfAngle = angle / 2  ;
  beginShape();
  for(let a = 0 ; a < TWO_PI ; a += angle){
   let sx = x + cos(a) * radius2 ; 
   let sy = y + sin(a) * radius2 ;
   vertex(sx,sy);
   sx = x + cos(a + halfAngle) * radius1 ; 
   sy = y + sin(a + halfAngle) * radius1 ; 
   vertex(sx,sy); 
 
  }
  endShape(CLOSE);
  
  
  
}









 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




 





function cline(x,y,x2,y2){
  
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  
  let num2 = abs( x2 - x ) ;
  let num3 = abs( y2 - y ) ; 
  let num4 = 0 ;
  let num5 = 0 ;
  let fornum = 0 ;
  if(num2>num3){
    fornum =num2;
    if(y2 - y >0){
      num5 = num3/num2;
    }else {
      num5 = (num3/num2 )*-1;
    }
    if(x2 - x >0){
      num4 = 1;
    }else if (x2 - x == 0){
      num4 = 0;
    }else if (x2 - x < 0){
      num4 = -1;
    }
  }else{
    fornum =num3;
    if(x2 - x >0){
      num4 = num2/num3;
    }else {
      num4 = (num2/num3 )*-1;
    }
    if(y2 - y >0){
      num5 = 1;
    }else if (y2 - y == 0){
      num5 = 0;
    }else if (y2 - y < 0){
      num5 = -1;
    }
  }  
   
  if(num4 == Infinity){
    num4 =0;
  }
 
  if(num5 == 0 && y2 - y >0){
    num5 =  1;
  }else if(num5 == 0 && y2 - y <0){
    num5 = -1;
  }else if(num5 == -Infinity  ){
    num5 = -1;
  }else if(  num5 ==  Infinity){
    num5 =  1;
  }
  
  
  push();
  noFill();
  beginShape(); 
  for(let a=-1; a <=   abs(fornum) +1   ;a+=1){
    curveVertex(this.x+num4*a  ,this.y+ num5*a  ); 
  }
  endShape();
  pop();
 
 
}
