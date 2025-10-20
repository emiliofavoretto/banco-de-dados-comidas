import * as comidaModel from '../models/comidaModels.js'

export const listarTodos = async (req, res) =>  {
    try {
        const comidas = await comidaModel.encontreTodos();

        if (!comidas || comidas.lenght === 0) {
            erro: 'Não possui comidas'
            comidas
        }

        res.status(200).json({
            total: comidas.lenght,
            message: 'lista de comidas',
            comidas
        })
} catch (error) {
    res.status(500).json({
        erro: 'Erro interno de servidor',
        detalhes: error.message,
        status: 500
    })
}

}

export const listarUm = async (req,res) => {
    try{
        const id = parseInt(req.params.id);
        const comida = await comidaModel.encontreUm(id);

        if (!comida){
           return res.status(200).json({
                erro: 'comida não encontrada',
                message: 'verifique o id da comida',
                id: id
            });
    }
    
    res.status(200).json({
        message: 'lista de comidas',
        comida
       })

} catch (error) {
    res.status(500).json({
        erro: 'Erro interno de servidor',
        detalhes: error.message,
        status: 500
    })
 }
} 