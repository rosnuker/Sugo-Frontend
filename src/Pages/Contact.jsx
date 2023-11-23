import styles from "./ContactUs.module.css";
import { Box, Grid } from "@mui/material";

const ContactUs = () => {

  return (
    <div className={styles.contactUs}>

      <div className={styles.messageBox}>

      <Grid item xs={12} sm={6}>
          <Box sx={{ bgcolor: 'white', height: 515, width: 950, marginTop: 18, marginRight: 70, marginLeft: 10, borderRadius: 4, opacity: '80%', padding: '20px' }}>

        <div className={styles.nBacalsoAvenueContainer}>
          <p className={styles.nBacalsoAvenue}><h1>N. Bacalso Avenue, Cebu City, Philippines 6000</h1></p>
        </div>

        <div className={styles.trunkline}><h1>+63 32 411 2000 (trunkline)</h1></div>
        <div className={styles.infosugoapp}><h1>info@sugo.app</h1></div>

        <img className={styles.phone} alt=""src="/images/phone.png"/>
        <img className={styles.location} alt="" src="/images/location.png"/>
        <img className={styles.envelope} alt="" src="/images/envelope.png"/>
        <img className={styles.kaisyaPhoneIsogashiiMan1Icon} alt="" src="/images/help.png"/>
        <img className={styles.rakenroll} alt="" src="/images/rakenroll.png"/>

        </Box>
      </Grid>

      </div>
    </div>
  );
};

export default ContactUs;
