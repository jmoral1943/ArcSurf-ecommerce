import React from "react";
import { Link } from "react-router-dom";

import Policy from "../TermsOfUse/Policy";

const PrivacyPolicy = () => {
  return (
    <div>
      <Policy />
      <div className="c-policy">
        <Link to="/termsofuse" className="c-policy__link">
          Terms Of Use
        </Link>
        <div className="c-policy__conditions">
          <p className="c-policy__title--highlight">PRIVACY POLICY</p>
          <p className="c-policy__title--updated">Last Updated: May 1, 2019</p>
          <p>
            Thank you for visiting our Privacy Policy (“Policy”). This Policy
            applies to personal In ultricies ac velit quis tincidunt. Aliquam
            non odio eget enim luctus mollis. Suspendisse pulvinar placerat
            sapien, consequat pharetra leo interdum a. Donec rhoncus ac metus ut
            rhoncus. Proin in dui tempor, consequat augue at, tempor justo.
            Vestibulum ac quam felis.orem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut in pellentesque lectus. Nam tempor condimentum
            turpis eu condimentum. Aenean placerat et mi at laoreet. Nam
            placerat tristique justo eget condimentum. Praesent fringilla nisl
            dolor, eget consequat felis scelerisque vel. Vivamus vulputate
            ornare imperdiet. I Vestibulum non erat sed diam mollis aliquam et
            ut ipsum. Sed dui sapien, blandit non sodales at, iaculis sit amet
            tellus. Donec commodo est a mi lobortis, at dapibus metus egestas.
            Vestibulum We encourage you to periodically review this Privacy
            Policy to keep up to date on how we are handling your personal
            information.
          </p>
          <p>CONSENT:</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
            varius lectus. Proin tristique mi et laoreet egestas. Donec tempus
            consectetur tortor. Proin nec dui risus. Curabitur ornare elit at
            neque lacinia, ac dignissim leo congue. Vestibulum non quam quis ex
            commodo accumsan eu id purus. Nam auctor est eget lobortis
            porttitor. Aenean nec tortor ut felis porta aliquam. Phasellus
            lacinia aliquet pellentesque. Curabitur sed lectus urna. Etiam sed
            mauris nisl. In non nibh sed lectus dignissim convallis id id ante.
            Curabitur mollis rhoncus scelerisque. Aenean ornare dignissim ex. Ut
            sagittis nec arcu vitae tempor. Vestibulum vulputate congue semper.
            In eu hendrerit lectus. Cras cursus nulla a lacus imperdiet
            molestie. Suspendisse potenti. Sed purus nisl, porta vel felis ut,
            scelerisque efficitur nibh. Quisque sodales malesuada viverra. Sed
            odio leo, condimentum vitae sem in, placerat consectetur tellus.
            Aenean lacinia enim sed quam euismod viverra. Fusce imperdiet nisl
            turpis, non volutpat nibh semper iaculis. Fusce laoreet tempus leo
            id pharetra. Sed elementum lectus tempor magna hendrerit, vitae
            ullamcorper felis fringilla. Etiam luctus libero et hendrerit
            rutrum. Nullam dapibus sed odio quis euismod. Sed et neque et mauris
            mattis volutpat. Integer suscipit magna orci, quis hendrerit est
            tristique a. In non ex a dolor feugiat commodo. Mauris mauris lorem,
            congue vel laoreet quis, porta eu odio. Pellentesque quis efficitur
            metus, at faucibus metus. Integer sit amet dolor aliquet, fringilla
            orci ut, euismod ex. Morbi posuere enim id tempus dapibus. Nullam ac
            est commodo, dapibus libero in, aliquet ipsum. Aenean sit amet
            tortor vulputate, imperdiet nisi vitae, tempus nibh. Aenean mattis
            volutpat orci, in maximus augue placerat et. In hac habitasse platea
            dictumst. Curabitur ornare ultricies purus, et lobortis est commodo
            eu. Mauris fermentum lectus ut nulla ultrices vulputate. Phasellus
            non sem sit amet ante ultrices maximus. Pellentesque bibendum, risus
            nec blandit sodales, libero est varius risus, in dictum quam massa
            eget dui. Duis pharetra felis vitae metus faucibus bibendum. Mauris
            eros risus, venenatis eu turpis sit amet, rhoncus suscipit risus.
            Morbi ac eros in ipsum aliquam consequat. Mauris non urna non eros
            semper tincidunt at nec tellus. Praesent sed efficitur tellus, nec
            facilisis eros. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Integer vehicula orci in bibendum finibus. Donec
            malesuada, diam sed laoreet cursus, dui est mollis mi, a molestie ex
            arcu aliquet ex. Phasellus quis mauris eu mauris pulvinar imperdiet.
            Nullam gravida nisi nulla, a blandit ipsum condimentum nec. Duis
            rutrum ante eleifend, consequat dolor sit amet, congue libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
