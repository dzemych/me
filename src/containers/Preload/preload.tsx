export const showPreloader = () => {
   const styles = `
      <style>
         html, body {
            min-height: 100vh;
            width: 100vw;
         }
      
         .preload-container {
             z-index: 1000;
             background: #0f141e;
             position: absolute;
             width: 100vw;
             height: 100vh;
             top: 0;
             right: 0;
             left: 0;
         }

         .preload-wrapper {
             position: relative;
         }
         
         .preload-pulse_container {
             position: absolute;
             top: 50%;
             transform: translateY(-50%);
             width: 100%;
             display: flex;
             justify-content: center;
         }
         
         .preload-pulse_circle {
             animation: sk-scaleout 1s infinite ease-in-out;
         }
         
         @keyframes sk-scaleout {
             from {
                 transform: scale(0);
             }
         
             to {
                 transform: scale(1);
                 opacity: 0;
             }
         }
      </style>
   `

   const Preload = `
      <div  id='preloader' style="z-index: 1000; background: #0f141e;
             position: absolute;
             width: 100vw;
             height: 100vh;
             top: 0;
             right: 0;
             left: 0;">
         <div class='preload-wrapper'>
            <div class='preload-pulse_container'>
               <div class='preload-pulse_circle'>
      
               </div>
            </div>
         </div>
      </div>
   `

   const head = document.head
   head.innerHTML += styles

   console.log('here')
   // document.body = document.createElement('body')
   // setTimeout(() => {
   //    const node = document.querySelector('body')
   //
   //    if (node)
   //       node.innerHTML += Preload
   //
   //    console.log(node)
   // }, 100)

   const node = document.querySelector('body')

   if (node)
      node.innerHTML += Preload

   setTimeout(() => {

   }, 100)
}