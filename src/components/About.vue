<template>
    <section class="about">
        <section class="avatar">
            <img src="@/assets/me.jpg" alt="Maxim Vanhove" />
        </section>

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
            const birthday = new Moment('1994-08-07 16:00:00')
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
        padding-bottom: 50px;

        .container {
            padding: 0 1rem;
            max-width: 780px;
            margin-left: auto;
            margin-right: auto;
        }

        > * {
            width: 100%;
        }

        section.avatar {
            padding: 5rem 0 2rem;
            text-align: center;
            position: relative;

            &::before {
                top: 0;
                left: 0;
                right: 0;
                bottom: 30%;
                background: $primary;
                display: block;
                width: 100%;
                position: absolute;
                z-index: 0;
                content: '';
            }

            > img {
                width: 140px;
                height: auto;
                border-radius: 50%;
                border: 4px solid white;
                position: relative;
                z-index: 1;
            }
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
