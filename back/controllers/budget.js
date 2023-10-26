const Budget = require('../models/budget')

exports.createBudget = (req, res) => {
    const budget = new Budget({
      amount: req.body.amount,
      user: req.body.user,
      category: req.body.category,
      date : new Date()
    });
    budget.save().then(
        () => {
            res.status(201).json({ 
                message: 'Budget enregistré !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({ 
                error: error 
            });
        }
    );
  };

exports.modifyBudget = (req, res, next) => {
    const budget = new Budget({
        _id: req.params.id,
        amount: req.body.amount,
        user: req.body.user,
        category: req.body.category,
        date : req.body.date
      });
      console.log(req.params.id)
    Budget.updateOne({ _id: req.params.id }, budget).then(
        () => {
            res.status(200).json(
                { message: 'budget modifié avec succés !'
            });
        }
    ).catch(
        (error) => {
            console.log(error)
            res.status(400).json({
                error: error
            });
        }
    );
  };

exports.getAllBudgetFromUser = (req, res, next) => {
    console.log(req.params.userId)
    Budget.find({ "user" : req.params.userId }).then(
        (budgets) => {
            res.status(200).json(budgets);
        }
    ).catch(
        (error) => {
            res.status(400).json({ 
                error: error 
            });
        }
    );
  };
