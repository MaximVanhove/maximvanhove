<template>
    <section class="about">
        <section class="avatar">
            <img src="@/assets/me.jpg" alt="Maxim Vanhove" />
        </section>

        <section class="container">
            <h1>MAXIM VANHOVE</h1>
            <h2 class="subtitle">Front End & PHP Developer</h2>
        </section>

        <section class="skills container">
            <div class="row row-gutter-3">
                <div class="col-md-6">
                    <article class="skill">
                        <aside>
                            <img class="skill__icon" src="@/assets/skills_developer.svg" alt="developer" title="developer" />
                        </aside>
                        <main>
                            <div class="skill__title">
                                DEVELOPER
                            </div>
                            <div class="skill__content">
                                Ik hou van Front End developing, maar dat wil niet zeggen dat ik niks ken van Back End systemen.
                            </div>
                        </main>
                    </article>
                </div>

                <div class="col-md-6">
                    <article class="skill">
                        <aside>
                            <img class="skill__icon" src="@/assets/skills_vue.svg" alt="vue" title="vue" />
                        </aside>
                        <main>
                            <div class="skill__title">
                                VUE
                            </div>
                            <div class="skill__content">
                                Als ik een Front End framework mag kiezen zal ik altijd voor Vue kiezen!
                            </div>
                        </main>
                    </article>
                </div>

                <div class="col-md-6">
                    <article class="skill">
                        <aside>
                            <img class="skill__icon" src="@/assets/skills_webdesigner.svg" alt="webdesigner" title="webdesigner" />
                        </aside>
                        <main>
                            <div class="skill__title">
                                WEBDESIGNER
                            </div>
                            <div class="skill__content">
                                Een aangename lay- out is een must bij elke website, ik vestig er dan ook graag aandacht aan.
                            </div>
                        </main>
                    </article>
                </div>

                <div class="col-md-6">
                    <article class="skill">
                        <aside>
                            <img class="skill__icon" src="@/assets/skills_illustrator.svg" alt="illustrator" title="illustrator" />
                        </aside>
                        <main>
                            <div class="skill__title">
                                ILLUSTRATOR
                            </div>
                            <div class="skill__content">
                                Illustreren is één van mijn skills die van pas komen bij webdesign.
                            </div>
                        </main>
                    </article>
                </div>
            </div>
        </section>

        <section class="container">
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
        </section>
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
            letter-spacing: 2px;
            margin: 0;
        }

        .subtitle {
            font-size: 18px;
            font-weight: 300;
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

        .row-gutter-3 {
            margin-right: -3rem;
            margin-left: -3rem;

            > * {
                padding-right: 3rem;
                padding-left: 3rem;
            }
        }

        .skills {
            padding-top: 5rem;
            padding-bottom: 3rem;
        }

        .skill {
            display: flex;
            flex-flow: row nowrap;
            font-size: 16px;
            margin-bottom: 2rem;

            > aside {
                padding-right: 1em;
            }

            &__icon {
                width: 1.8em;
            }

            &__title {
                font-size: 1.2em;
                color: #4D4D4F;
                text-transform: uppercase;
                line-height: 1;
                font-weight: 600;
                margin-top: -3px;
                margin-bottom: 1rem;
            }

            &__content {
                color: #888888;
                font-style: italic;
                font-weight: 300;
            }
        }
    }
</style>
