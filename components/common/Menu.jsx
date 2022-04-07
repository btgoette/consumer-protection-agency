import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";

export default function CPAServicesMenu() {
  return (
    <>
      <div className="menu">
        <Link href="/services/private-small-business-network">
          <a>
            <div className="cpa-services-menu">
              <div className="cpa-services-menu-block">
                <Image
                  src="/images/backgrounds/small-business.webp"
                  alt="Small Business"
                  width="480"
                  height="275"
                  layout="responsive"
                />
              </div>
              <div className="overlay-block">
                <a>
                  Private Small
                  <br /> Business Network
                </a>
              </div>
              <div className="cover"></div>
            </div>
          </a>
        </Link>

        <Link href="/services/accounting-and-tax-services">
          <a>
            <div className="cpa-services-menu">
              <div className="cpa-services-menu-block">
                <Image
                  src="/images/backgrounds/accounting-and-taxes.webp"
                  alt="Accounting & Taxes"
                  width="480"
                  height="275"
                  layout="responsive"
                />
              </div>
              <div className="overlay-block">
                <a>Accounting & Tax Services</a>
              </div>
              <div className="cover"></div>
            </div>
          </a>
        </Link>

        <Link href="/services/financial-education">
          <a>
            <div className="cpa-services-menu">
              <div className="cpa-services-menu-block">
                <Image
                  src="/images/backgrounds/financial-education.webp"
                  alt="Financial Education"
                  width="480"
                  height="275"
                  layout="responsive"
                />
              </div>
              <div className="overlay-block">
                <Link href="/services/financial-education">
                  <a>Financial Education</a>
                </Link>
              </div>
              <div className="cover"></div>
            </div>
          </a>
        </Link>

        <Link href="/services/credit-restoration">
          <a>
            <div className="cpa-services-menu">
              <div className="cpa-services-menu-block">
                <Image
                  src="/images/backgrounds/credit-restoration.webp"
                  alt="Credit Restoration"
                  width="480"
                  height="275"
                  layout="responsive"
                />
              </div>
              <div className="overlay-block">
                <a>Credit Restoration</a>
              </div>
              <div className="cover"></div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
