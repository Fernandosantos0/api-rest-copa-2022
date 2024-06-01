// importando o repository
import SelecaoRepository from '../repositories/SelecaoRepository.js';

class SelecaoController {
    async index(req, res, next) { // Listar tudo
        const rows = await SelecaoRepository.findAll();

        res.status(200).json(rows);
    }

    async show(req, res, next) { // Listar tudo por id
        const { id } = req.params;
        const row = await SelecaoRepository.findById(id);

        res.status(200).json(row);
    }

    async store(req, res, next) { // Criar dados
        const selecao = req.body;
        const row = await SelecaoRepository.create(selecao);

        res.status(201).json(row);
    }

    async update(req, res, next) { // Atualizar dados
        const { id } = req.params;
        const selecao = req.body;
        const row = await SelecaoRepository.update(selecao, id);

        res.status(200).json(row);
    }

    async delete(req, res, next) { // Apagar dados
        const { id } = req.params;
        const row = await SelecaoRepository.delete(id);

        res.status(200).json(row);
    }
}

// padrão singleton
export default new SelecaoController();
