import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
 
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap"
                        rel="stylesheet" />

                    <link rel="shortcut icon" href="/logo.png" type="image/png"/>
                    
                    <title>Nied | Notas</title>

                </Head>
                <body>
                    <Main />
                    <NextScript/>
                </body>
            </Html>
        )
    }
}