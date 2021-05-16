<template>
    <main>
        <div   v-for="matricesData in baseMatrices" :key="matricesData.key">
            <h6 >{{matricesData.name}}</h6>

            <button v-for="option in matricesData.options" :key="option.name"  @click="selectOption(matricesData.key,option)" :title="option.d" class="btn severityBtn"
                    :class=" {'selected' : selectedMatrices[matricesData.key] === option.name }"> {{option.l}}</button>
        </div>
        <div class="scoreBar">
            <h6 >Severity Score Vector</h6>
            <button class="severityBtn" :class="severityRating.name"
                    :title="severityRating.bottom + '-' + severityRating.top">
                {{severityRating.name}}
            </button>
            <span >{{score}}</span>
            <span class=" scoreTextColor">{{scoreVector}}</span>
        </div>
    </main>
</template>

<script>
    import { baseMatrices,severityRatings,weight,exploitabilityCoefficient,scopeCoefficient } from "../assets/cvss";
    export default {
        name: "calculCVSS3",
        data(){
            return{
                baseMatrices:baseMatrices,
                severityRatings:severityRatings,
                weight:weight,
                exploitabilityCoefficient:exploitabilityCoefficient,
                scopeCoefficient:scopeCoefficient,
                selectedMatrices:[]
            }
        },

        computed:{

            severityRating: function () {
                let i;
                let severityRatingLength = this.severityRatings.length;
                for (i = 0; i < severityRatingLength; i++) {
                    if (this.score >= this.severityRatings[i].bottom && this.score <= this.severityRatings[i].top) {
                        return this.severityRatings[i];
                    }
                }
                return {
                    name: "?",
                    bottom: 'Not',
                    top: 'defined'
                };
            },
            score: function(){
                let metricWeight = {};
                Object.keys(this.weight).forEach((key) => {
                    if (this.selectedMatrices[key] && key === 'PR') {
                        if (this.selectedMatrices.S) {
                            metricWeight[key] = this.weight[key][this.selectedMatrices.S][this.selectedMatrices[key]];
                        } else {
                            metricWeight[key] = 0;
                        }
                    } else if (this.selectedMatrices[key]) {
                        metricWeight[key] = this.weight[key][this.selectedMatrices[key]];
                    } else {
                        metricWeight[key] = 0;
                    }
                });

                //
                // CALCULATE THE CVSS BASE SCORE
                //
                let roundUpScore = function Roundup(input) {
                    let int_input = Math.round(input * 100000);
                    if (int_input % 10000 === 0) {
                        return int_input / 100000
                    } else {
                        return (Math.floor(int_input / 10000) + 1) / 10
                    }
                };
                try {
                    let baseScore, impactSubScore;
                    let impactSubScoreMultiplier = (1 - ((1 - metricWeight.C) * (1 - metricWeight.I) * (1 - metricWeight.A)));
                    if (this.selectedMatrices.S === 'U') {
                        impactSubScore = metricWeight.S * impactSubScoreMultiplier;
                    } else {
                        impactSubScore = metricWeight.S * (impactSubScoreMultiplier - 0.029) - 3.25 * Math.pow(impactSubScoreMultiplier - 0.02, 15);
                    }
                    let exploitabilitySubScore = this.exploitabilityCoefficient * metricWeight.AV * metricWeight.AC * metricWeight.PR * metricWeight.UI;
                    if (impactSubScore <= 0) {
                        baseScore = 0;
                    } else {
                        if (this.selectedMatrices.S === 'U') {
                            baseScore = roundUpScore(Math.min((exploitabilitySubScore + impactSubScore), 10));
                        } else {
                            baseScore = roundUpScore(Math.min((exploitabilitySubScore + impactSubScore) * this.scopeCoefficient, 10));
                        }
                    }
                    return baseScore.toFixed(1);
                } catch (err) {
                    return err;
                }
            },
            scoreVector : function(){
                let score = 'CVSS:3.1/AV:';
                score += this.selectedMatrices['AV'] ? this.selectedMatrices['AV'] : '_';
                score += "/AC:" + (this.selectedMatrices['AC'] ? this.selectedMatrices['AC'] : '_');
                score += "/PR:" + (this.selectedMatrices['PR'] ? this.selectedMatrices['PR'] : '_');
                score += "/UI:" + (this.selectedMatrices['UI'] ? this.selectedMatrices['UI'] : '_');
                score += "/S:" + (this.selectedMatrices['S'] ? this.selectedMatrices['S'] : '_');
                score += "/C:" + (this.selectedMatrices['C'] ? this.selectedMatrices['C'] : '_');
                score += "/I:" + (this.selectedMatrices['I'] ? this.selectedMatrices['I'] : '_');
                score += "/A:" + (this.selectedMatrices['A'] ? this.selectedMatrices['A'] : '_');
                return score;
            },
        },

        methods:{
             selectOption(key,option){
                // this.selectedMatrices.splice(key, 0, option.name)
               //  this.$set(this.selectedMatrices, key, option.name)
                 this.selectedMatrices.push( {[key]: option.name} );
                 //console.log(Object.keys(this.selectedMatrices[0]))
                // console.log(Object.values(this.selectedMatrices[0]))
                this.selectedMatrices[key]= option.name
        }
        }
    }
</script>

<style scoped>


    .severityBtn {
        font-size: 14px;
        color: #bcc8d3;
        background-color: #fff;
        border: 1px solid #bcc8d3;
        border-radius: 0;
        text-transform: capitalize;
        padding: 5px 8px;
        font-weight: 100;
        min-width: 60px;
        letter-spacing: 0;
        margin-right: 4px;
        position: relative;
    }

    .scoreTextColor{
        color: blue;
    }
    .scoreBar{
        background: #f7f8f9;
        padding: 1px 10px 15px;
    }
    .None {
        background: #bcc8d3;
        border: 1px solid #bcc8d3;
        color: #fff;
    }
    .Low {
        background: #62b1f0;
        border: 1px solid #62b1f0;
        color: #fff;
    }
    .Medium {
        background: #f0a23d;
        border: 1px solid #f0a23d;
        color: #fff;
    }
    .High {
        background: #ff4b71;
        border: 1px solid #ff4b71;
        color: #fff;

    }
    .Critical {
        background: #611677;
        border: 1px solid #611677;
        color: #fff;


    }
    .selected,.severityBtn:hover {
        background: #3a4d75;
        border: 1px solid #3a4d75;
        color: #fff;
    }

</style>