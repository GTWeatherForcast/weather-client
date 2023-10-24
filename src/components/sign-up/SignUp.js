import styles from './SignUp.css';
import stylesLanding from '../landing/Landing.module.css';
import { LandingCard } from '../landing/Landing';

function SignUpPage() {
  return (
    <div className={stylesLanding.landingRoot}>
      <div className={stylesLanding.cardLeft}>
        left card
      </div>

      <LandingCard isShowingLeftCard={true} />
    </div>
  );
}

export default SignUpPage;