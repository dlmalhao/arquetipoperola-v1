import './contact.css';
import Grid from '@mui/material/Grid';
import contactImage from '../../assets/contact.png';

export default function Contact() {
  return (
    <div id="contact" className="contact">
        <Grid container className="landing__grid">
            <Grid size={{ xs: 1, md: 1 }} />
            <Grid container spacing={5} size={{ xs: 10, md: 10 }} className="landing__content">
                <Grid item size={{ xs: 12, sm: 6, md: 8 }}>
                    <div className="title" data-aos="fade-in" data-aos-duration="2000">
                      <h2>Contacte-nos</h2>
                    </div>
                    <div className="description" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                        <p>Agende uma reunião com os nossos arquitetos</p>
                    </div>
                    <div className="form">
                        <div className="email" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="200">
                            <div className="name">
                                <h2>Email</h2>
                            </div>
                            <div className="description" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                                <p>exemplo@dominio.com</p>
                            </div>
                        </div>
                        <div className="phone" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="200">
                            <div className="name">
                                <h2>Telefone</h2>
                            </div>
                            <div className="description">
                                <p>+351 123 456 789</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="name" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="300">
                                <h2>Morada</h2>
                            </div>
                            <div className="description" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="400">
                                <p>Av. Dom João II, 123, 1200-001 Lisboa, Portugal</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" item size={{ xs: 0, sm: 6, md: 4 }}>
                    <img src={contactImage} alt="Contact" className="contact__image" />
                </Grid>
            </Grid>
            <Grid size={{ xs: 1, md: 1 }} />
        </Grid>    
    </div>
  );
}
