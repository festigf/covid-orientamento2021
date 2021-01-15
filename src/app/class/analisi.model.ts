export class Analisi {
    active_Case: string;
    new_Cases: string;
    new_Deaths: string;
    total_Cases: string;
    total_Deaths: string;
    total_Recovered: string;

    constructor(active_Case: string, new_Cases: string, new_Deaths: string, total_Cases: string, total_Deaths: string, 
        total_Recovered: string){
            this.active_Case = active_Case;
            this.new_Cases = new_Cases;
            this.new_Deaths = new_Deaths;
            this.total_Cases = total_Cases;
            this.total_Deaths = total_Deaths;
            this.total_Recovered = total_Recovered;
    }
}