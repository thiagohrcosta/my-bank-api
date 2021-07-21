class Api::V1::AccountsController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User, except: [ :index, :show ]
  before_action :set_account,  only: [:show, :update]

  def index
    @accounts = policy_scope(Account)
    authorize @accounts
  end

  def show;end

  def create
    @account = Account.new(account_params)
    @account.user = current_user
    authorize @account
    if @account.save
      render :show, status: :created
    else
      render_error
    end
  end

  def update
    if @account.update(account_params)
      render :show
    else
      render_error
    end
  end

  private

  def set_account
    @account = Account.find(params[:id])
    authorize @account
  end

  def account_params
    params.require(:account).permit(:user_id, :number, :full_name, :balance)
  end

  def render_error
    render json: { errors: @account.errors.full_messages },
    status: :unprocessable_entity
  end
end
