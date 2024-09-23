import { css } from 'lit';

export const bannerStyle = css`
    :host {
        display: block;
        color: var(--uconn-banner-text-color, #000);

    }

    #uconn-banner {
        padding: 0 16px;

    }

    main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }

    #uconn-banner.blue{
        color: #fff;
        background-color: #000E2F;
    }

    #uconn-banner.white{
        color: #fff;
        background-color: #000E2F;
    }

    #wordmark {
        width: 100px;
        display: flex;
        align-items: center;
    }

    #wordmark > svg {
        width:100%
    }
`