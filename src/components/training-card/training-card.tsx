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
                {this.imgurl ? <img class="heroImg" src={getAssetPath(`./assets/${this.imgurl}`)} alt={this.imgalt}/> : null}
                <div class="cardContent">
                    {this.header ? <h3>{this.header}</h3> : null}
                    {this.sub ? <h5>{this.sub}</h5> : null}
                    {this.body ? <slot>{this.body}</slot> : null}
                    <a href={this.linkurl} target={this.linktarget} class="learnMoreBtn">
                        <span>{this.linkLabel}</span>
                        <img class="arrow" src={getAssetPath(`./assets/${this.linkArrow}`)}/>
                    </a>
                </div>
            </div>
        )
    }
}