#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF");

#[program]
pub mod VotingSystemSolana {
    use super::*;

  pub fn close(_ctx: Context<CloseVotingSystemSolana>) -> Result<()> {
    Ok(())
  }

  pub fn decrement(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.VotingSystemSolana.count = ctx.accounts.VotingSystemSolana.count.checked_sub(1).unwrap();
    Ok(())
  }

  pub fn increment(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.VotingSystemSolana.count = ctx.accounts.VotingSystemSolana.count.checked_add(1).unwrap();
    Ok(())
  }

  pub fn initialize(_ctx: Context<InitializeVotingSystemSolana>) -> Result<()> {
    Ok(())
  }

  pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
    ctx.accounts.VotingSystemSolana.count = value.clone();
    Ok(())
  }
}

#[derive(Accounts)]
pub struct InitializeVotingSystemSolana<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  init,
  space = 8 + VotingSystemSolana::INIT_SPACE,
  payer = payer
  )]
  pub VotingSystemSolana: Account<'info, VotingSystemSolana>,
  pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct CloseVotingSystemSolana<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  mut,
  close = payer, // close account and return lamports to payer
  )]
  pub VotingSystemSolana: Account<'info, VotingSystemSolana>,
}

#[derive(Accounts)]
pub struct Update<'info> {
  #[account(mut)]
  pub VotingSystemSolana: Account<'info, VotingSystemSolana>,
}

#[account]
#[derive(InitSpace)]
pub struct VotingSystemSolana {
  count: u8,
}
