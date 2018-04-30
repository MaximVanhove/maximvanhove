<template>
    <section class="about">
        <div class="container">
            <h1>MAXIM VANHOVE</h1>
            <aside>Front End & PHP Developer</aside>

            <p>
                Mijn naam is Maxim Vanhove, <br>
                ik ben op dit moment exact {{ age.years }} jaar, {{ age.months }} maanden, {{ age.days }} dagen, {{ age.hours }} uur, {{ age.minutes }} minuten en {{ age.seconds }} seconden oud.
            </p>

            <p>
                Ik ben zeer geïnteresseerd in webtechnologieën en alles wat er mee te maken heeft. Als ik niet slaap kan je me altijd op het web terug vinden.
            </p>

            <p>
                <a target="_blank" href="https://github.com/MaximVanhove" class="social">
                    <i class="fab fa-github"></i>
                </a>
                <a target="_blank" href="https://twitter.com/MrMaximVanhove" class="social">
                    <i class="fab fa-twitter"></i>
                </a>
                <a target="_blank" href="mailto:info@maximvanhove.me" class="social">
                    <i class="far fa-envelope-open"></i>
                </a>
            </p>
        </div>
    </section>
</template>

<script>
import Moment from 'moment'

export default {
    name: 'about',

    data: () => ({
        age: null,
    }),

    created () {
        this.calculateAge()
    },

    methods: {
        calculateAge () {
            const birthday = new Moment('August 07, 1994 16:00:00')
            const now = new Moment()
            const duration = Moment.duration(now.diff(birthday))

            this.age = duration._data

            setTimeout(this.calculateAge, 1000)
        },
    },
}
</script>

<style lang="scss">
    @import '../scss/abstracts/variables';

    section.about {
        background: white;
        min-height: 100vh;
        color: #333;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;

        .container {
            padding: 0 1rem;
            max-width: 780px;
            margin-left: auto;
            margin-right: auto;
        }

        > * {
            width: 100%;
        }

        h1 {
            text-align: center;
            margin: 0;
        }

        aside {
            text-align: center;
            color: rgba(#333, .5);
            margin-bottom: 3rem;
        }

        p {
            font-size: 16px;
        }

        .social {
            margin-right: 1em;
        }
    }
</style>
