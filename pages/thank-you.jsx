import { Container, Row, Col } from 'react-bootstrap'

import Head from 'components/common/Head'
import OneColumnGrid from 'components/common/OneColumnGrid'

import page from 'public/content/en_US/Page/thankYou.content'

export default function ThankYou() {

    return(

        <>
        <Head {...page} />

        <OneColumnGrid { ...page.hero}/>
    </>

    )

}