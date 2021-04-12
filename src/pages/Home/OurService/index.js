import React, { Component } from 'react';
import './style.scss';

export default class OurService extends Component {
    render() {
        return (
           <section className="section-padding our-services">
                <div className="cf-container our-services__content">
                    <div className="d-gr-4">
                        <div className="our-services--item">
                            <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851624/BaristaCoffee/icons/service-icon1_bzo8lz.png" alt="service" />

                            <div>
                                <h4>Coffeemaker</h4>
                                <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                            </div>
                            
                        </div>
                        <div className="our-services--item">
                            <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851624/BaristaCoffee/icons/service-icon2_t2wvkk.png" alt="service" />
                            <div>
                                <h4>Coffee Grinder</h4>
                                <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                            </div>

                            
                        </div>
                        <div className="our-services--item">
                            <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851624/BaristaCoffee/icons/service-icon3_tq33hg.png" alt="service" />
                            <div>
                            <h4>Coffee Cups</h4>
                            <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                            </div>
                            
                        </div>
                        <div className="our-services--item">
                            <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851624/BaristaCoffee/icons/service-icon4_cyxjmc.png" alt="service" />
                            <div>
                            <h4>Espresso Machine</h4>
                            <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
