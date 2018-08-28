import React , {Component } from 'react';

class  Component_DesignPattern extends Component{
render(){
    return(
<div className="section" id="designPattern">
   <div className="container">
      <div className="h4 text-center mb-4 title">Design Patterns</div>
      <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
         <div className="card-body">
            {/* Linha 1 */}
            <div className="row">
               <div className="col-md-6">
                  <div className="progress-container progress-primary">
                     <span className="progress-badge"> Factory </span>
                     <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" 
                        data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" 
                        aria-valuemin="0" aria-valuemax="100" 
                        style={{flex: 1}}
                        >
                     </div>
                     <span className="progress-value">100%</span>
                  </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="progress-container progress-primary">
                  <span className="progress-badge">Abstract Factory </span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-primary"
                     data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000"
                     role="progressbar" aria-valuenow="60" aria-valuemin="0"
                     aria-valuemax="100" 
                     style={{flex: 1}}>
                  </div>
                  <span className="progress-value">100%</span>
               </div>
            </div>
         </div>
      </div>
    {/* Linha 2 */}
    <div className="row">
               <div className="col-md-6">
                  <div className="progress-container progress-primary">
                     <span className="progress-badge"> Dependency Injection </span>
                     <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" 
                        data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" 
                        aria-valuemin="0" aria-valuemax="100" 
                        style={{flex: 1}}
                        >
                     </div>
                     <span className="progress-value">100%</span>
                  </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="progress-container progress-primary">
                  <span className="progress-badge">Singleton</span>
                  <div className="progress">
                     <div className="progress-bar progress-bar-primary"
                     data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000"
                     role="progressbar" aria-valuenow="60" aria-valuemin="0"
                     aria-valuemax="100" 
                     style={{flex: 1}}>
                  </div>
                  <span className="progress-value">100%</span>
               </div>
            </div>
         </div>
      </div>

</div>
</div>
</div>
</div>
    );
}

}

export default Component_DesignPattern;