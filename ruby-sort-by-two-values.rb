def sort_by_experience(candidates)
  candidates.sort_by { |candidate| [candidate[:years_of_experience], candidate[:github_points]] }.reverse!
end