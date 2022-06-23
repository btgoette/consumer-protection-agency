import Link from "next/link";

export default function CPAServicesMenu() {
  return (
    <>
      <div className="menu">
        <Link href="/services/private-small-business-network">
          <a>
            <div className="cpa-services-menu">
              <div className="cpa-services-menu-block">
                <img
                  src="/images/backgrounds/small-business.webp"
                  alt="Small Business"
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
                <img
                  src="/images/backgrounds/accounting-and-taxes.webp"
                  alt="Accounting & Taxes"
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
                <img
                  src="/images/backgrounds/financial-education.webp"
                  alt="Financial Education"
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
                <img
                  src="/images/backgrounds/credit-restoration.webp"
                  alt="Credit Restoration"
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
