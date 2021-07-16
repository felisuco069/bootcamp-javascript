export const mapAcoountListFromApiToViewModel =
    (accountList) => {
        return accountList.map(account =>
            mapAccountFromApiToViewModel(account));
    };


const mapAccountFromApiToViewModel = (account) => {
    return {
        id: account.id,
        iban: account.iban,
        name: account.name,
        balance: `${account.balance} €`,
        lastTransaction: new Date(account.lastTransaction)
            .toLocaleDateString(), // toLocaleDateString para transformar un string a formato fecha DD/MM/AAAA
    };
};