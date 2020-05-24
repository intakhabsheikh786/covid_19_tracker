const getCovid19Data = async () => {
    try {
        let response = await fetch(
            'https://api.covid19api.com/summary'
        );
        return response.json();
    } catch (error) {
        return error;
    }
}


export const getGlobalData = async () => {
    try {
        const res = await getCovid19Data();
        return res['Global'];
    } catch (error) {
        return { err: 'Server error' };
    }
}

export const getCountryData = async (selected_item) => {
    try {
        const res = await getCovid19Data();
        const countries = res['Countries'];
        return countries.find(country => {
            return country['Country'] === selected_item;
        })

    } catch (error) {
        return { err: 'Server error' };
    }
}


















// this.setState({ loading: true })
//         let data;
//         try {
//             data = await getCovid19Data();
//             if (selected_item == 'Global') return this.globalData(data);
//             const countries = data['Countries'];
//             const selected_counrty_data = countries.find(country => {
//                 return country['Country'] === selected_item;
//             })
//             if (selected_counrty_data) this.setState({ loading: false, selected_item_data: selected_counrty_data })
//         } catch (error) {
//             return console.log("Server error");
//         }




//         try {
//             const data = await getCovid19Data();
//             this.globalData(data);
//         } catch (error) {
//             return console.log("Server error")

//         }