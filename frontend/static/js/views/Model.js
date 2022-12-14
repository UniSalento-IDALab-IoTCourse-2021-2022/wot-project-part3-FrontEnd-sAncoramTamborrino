import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About the model");
    }

    async getHtml() {
        return `
            <h1>About the model</h1>
            <p>
                The dataset is a csv file of more than 25000 rows. The columns are: Heart Rate, Respiration Rate, Oxygen's
                Level and Body Temperature. As explained in the python colab, the 0 entries have been substituted with
                their mean.
            </p>
            
            <p>
                For the model the random forest classifier has been used. A random forest is a meta estimator that fits
                a number of decision tree classifiers on various sub-samples of the dataset and uses averaging to 
                improve the predictive accuracy and control over-fitting.
            </p>
            
            <p>
                Afterwards, some fine tuning has been applied. The final test accuracy is 0.99%.
            </p>
        `;
    }
}