import { Component, Prop, getAssetPath, h } from "@stencil/core";

@Component ({
    tag: 'training-card',
    styleUrl : './training-card.scss',
    assetsDirs: ['assets']
})
export class TrainingCard {

    //text props
    @Prop() header: string;
    @Prop() sub: string;
    @Prop() body: string;

    //img props
    @Prop() imgurl: string;
    @Prop() imgalt: string;

    //link props
    @Prop() linkurl: string;
    @Prop() linktarget: string;
    @Prop() linkLabel: string;
    @Prop() linkArrow = "arrow.svg";


    render() {
        return (
            <div class="card">
                <img class="heroImg" src={getAssetPath(`./assets/${this.imgurl}`)} alt={this.imgalt}/>
                <div class="cardContent">

                    <h1>{this.header}</h1>
                    <h4>{this.sub}</h4>
                    <p>{this.body}</p>
                    <a href={this.linkurl} target={this.linktarget} class="learnMoreBtn">
                        <span>{this.linkLabel}</span>
                        <img class="arrow" src={getAssetPath(`./assets/${this.linkArrow}`)}/>
                    </a>
                    
                </div>
            </div>
        )
    }
}