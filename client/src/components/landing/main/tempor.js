import Image from "next/image";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default function Tempor() {
    return (
        <section id="tempor">
            <div className="container">
                <div className="title" data-aos="zoom-out-up">
                    <div className="headtitle">
                        <h2>Sed do eiusmod tempor incididunt ut labore accusantium dolorem.</h2>
                    </div>
                </div>
                <div className="wrapper">
                    <Image src="/landing/tempor/phone.webp" width={350} height={700} className="phone" alt="phone" data-aos="zoom-out-right"/>
                    <div className="content">
                        <div className="top" data-aos="zoom-out-down">
                            <h3>At vero eos et accusamus et iusto odio dignissimos ducimus quit.</h3>
                            <p>But I must explain to you how all this mistaken idea of dencuncing pleasure and praising pain.</p>
                        </div>
                        <div className="round">
                            <div className="card" data-aos="zoom-out">
                                <Image src="/landing/tempor/vibes.webp" width={270} height={270} alt="vibes" />
                                <p>In a free hour. when our power of choice is untrammelled</p>
                            </div>
                            <div className="card" data-aos="zoom-out">
                                <Image src="/landing/tempor/party.webp" width={270} height={270} alt="party" />
                                <p>Lorem ipsum dolor sit amet a consectetur adipisicing elit.</p>
                            </div>
                            <div className="card" data-aos="zoom-out">
                                <Image src="/landing/tempor/training.webp" width={270} height={270} alt="training" />
                                <p>Lorem ipsum dolor sit amet a consectetur adipisicing elit.</p>
                            </div>
                            <div className="card" data-aos="zoom-out">
                                <Image src="/landing/tempor/summer.webp" width={270} height={270} alt="training" />
                                <p>This is one of my favorite flowers, I love to give flowers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="card" data-aos="zoom-out">
                        <h4><CountUp end={25} redraw={true}>{({ countUpRef, start }) => (<VisibilitySensor onChange={start} delayedCall><span ref={countUpRef} /></VisibilitySensor>)}</CountUp>M+</h4>
                        <p>Happy user</p>
                    </div>
                    <div className="card" data-aos="zoom-out">
                        <h4><CountUp end={4.85} redraw={true} decimals={2}>{({ countUpRef, start }) => (<VisibilitySensor onChange={start} delayedCall><span ref={countUpRef} /></VisibilitySensor>)}</CountUp></h4>
                        <p>Ratting from user</p>
                    </div>
                    <div className="card" data-aos="zoom-out">
                        <h4><CountUp end={132} redraw={true}>{({ countUpRef, start }) => (<VisibilitySensor onChange={start} delayedCall><span ref={countUpRef} /></VisibilitySensor>)}</CountUp>+</h4>
                        <p>National award</p>
                    </div>
                    <div className="card" data-aos="zoom-out">
                        <h4><CountUp end={70} redraw={true}>{({ countUpRef, start }) => (<VisibilitySensor onChange={start} delayedCall><span ref={countUpRef} /></VisibilitySensor>)}</CountUp>+</h4>
                        <p>Partnership</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
