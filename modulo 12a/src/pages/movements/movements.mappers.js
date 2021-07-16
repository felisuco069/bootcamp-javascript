export const mapAccountFromApiToViewModel = (account) => {
    return {
        ...account,
        amount: `${account.amount} €`,
        balance: `${account.balance} €`,
        realTransaction: new Date(account.realTransaction)
            .toLocaleDateString(), // toLocaleDateString para transformar un string a formato fecha DD/MM/AAAA
        transaction: new Date(account.transaction)
            .toLocaleDateString(),
    };
};